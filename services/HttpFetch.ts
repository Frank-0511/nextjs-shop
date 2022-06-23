import { CODE_FETCHING } from "@/utils/constants";
import { clearStorage } from "@/utils/storage";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const HttpFetch = {
  get: async (url: string, headers: any = {}) => {
    const response = await fetch(`${publicRuntimeConfig.apiUrl}${url}`, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    console.log(
      "🚀 ~ file: HttpFetch.ts ~ line 16 ~ get: ~ response",
      response
    );
    return response.json();
  },
  post: async (url: string, body: any, headers: any = {}) => {
    const response = await fetch(`${publicRuntimeConfig.apiUrl + url}`, {
      method: "POST",
      body: body,
      redirect: "follow",
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
    if (response.status === CODE_FETCHING.error.Unauthorized) {
      clearStorage();
      return false;
    }
    return response;
  },
};

export default HttpFetch;
