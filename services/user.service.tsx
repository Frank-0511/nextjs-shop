import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

/*
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);
*/
export const userService = {
  login,
};

const TYPE_FETCHING = {
  post: "POST",
  get: "GET",
  put: "PUT",
  delete: "DELETE",
};

const CODE_FETCHING = {
  success: {
    ok: 200,
    created: 201,
    accepted: 202,
  },
  error: {
    unknownUrl: 404,
    denied: 429,
    Unauthorized: 401,
    UnprocessableEntity: 422,
  },
};

function returnFunction(callback: any) {
  return callback
    .then((response: any) => {
      console.log(
        "🚀 ~ file: user.service.tsx ~ line 39 ~ .then ~ response",
        response
      );
      if (response.status === CODE_FETCHING.error.Unauthorized) {
        return false;
      }
      return response.data;
    })
    .catch((error: any) => {
      throw error;
    });
}

const api = (
  url = "",
  method = TYPE_FETCHING.get,
  params: any = {},
  file = false
) => {
  const options: any = {
    method,
    url: publicRuntimeConfig.apiUrl + url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    data: {},
  };

  switch (method) {
    case TYPE_FETCHING.post:
      options.data = params;
      options.headers["content-type"] = "application/json";
      if (file) {
        options.headers["content-type"] = "multipart/form-data";
        options.data = params.file;
      }
      break;
    default:
      options.params = params;
  }

  return returnFunction(axios.request(options));
};

async function login(email: string, password: string) {
  const response = await api(`/users/login`, TYPE_FETCHING.post, {
    email,
    clave: password,
  });
  console.log(
    "🚀 ~ file: user.service.tsx ~ line 88 ~ login ~ response.data",
    response.data
  );
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
}
