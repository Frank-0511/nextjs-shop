import { CODE_FETCHING } from "./constants";
import { validate } from "./functions";

export const KEY_USER_ID = "USER_ID";
export const KEY_USER_NAME = "USER_NAME";
export const KEY_USER_EMAIL = "USER_EMAIL";
export const KEY_USER_FIRST_NAME = "USER_FIRST_NAME";
export const KEY_USER_LAST_NAME = "USER_LAST_NAME";
export const KEY_USER_PASSWORD = "USER_PASSWORD";
export const KEY_USER_STATUS = "USER_STATUS";
export const KEY_USER_ROLE = "USER_ROLE";

export const setItem = (key: string, value = "") => {
  try {
    if (validate.exist(key)) {
      localStorage.setItem(key, value);
    }
  } catch (e) {
    console.error(e);
  }
};

export const getItem = (key: string, defaultValue = null) => {
  try {
    if (validate.exist(key)) {
      const value = localStorage.getItem(key);
      return validate.exist(value) ? value : defaultValue;
    }
  } catch (e) {
    return defaultValue;
  }
};

export const clearStorage = () => {
  localStorage.clear();
  location.reload();
};

export const LOCAL_USER_ID = () => getItem(KEY_USER_ID);
export const LOCAL_USER_NAME = () => getItem(KEY_USER_NAME);
export const LOCAL_USER_EMAIL = () => getItem(KEY_USER_EMAIL);
export const LOCAL_USER_FIRST_NAME = () => getItem(KEY_USER_FIRST_NAME);
export const LOCAL_USER_LAST_NAME = () => getItem(KEY_USER_LAST_NAME);
export const LOCAL_USER_ROLE = () => getItem(KEY_USER_ROLE);

export const validateSession = () => () => {
  if (LOCAL_USER_ID()) {
    return true;
  }

  return false;
};

export const removeSession = (status: number) => {
  if (status === CODE_FETCHING.error.Unauthorized) {
    clearStorage();
  }
};
