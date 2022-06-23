import {
  KEY_USER_EMAIL,
  KEY_USER_FIRST_NAME,
  KEY_USER_ID,
  KEY_USER_LAST_NAME,
  KEY_USER_NAME,
  KEY_USER_ROLE,
  setItem,
} from "@/utils/storage";

import HttpFetch from "./HttpFetch";
import { ROLES } from "@/utils/constants";

export const userService = {
  login,
  getUsers,
};

async function login(email: string, password: string) {
  var formData = new FormData();
  formData.append("email", email);
  formData.append("clave", password);
  const response = await HttpFetch.post("/users/login", formData);
  if (response.code === 200) {
    setItem(KEY_USER_ID, response.data.user_id);
    setItem(KEY_USER_NAME, response.data.username);
    setItem(KEY_USER_EMAIL, response.data.email);
    setItem(KEY_USER_FIRST_NAME, response.data.first_name);
    setItem(KEY_USER_LAST_NAME, response.data.last_name);
    setItem(KEY_USER_ROLE, ROLES.admin);
  }
  return response;
}

async function getUsers(idUser: number | null = null) {
  const response = await HttpFetch.get(`/users${idUser ? `/${idUser}` : ""}`);
  return response;
}
