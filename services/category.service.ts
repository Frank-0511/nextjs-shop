import HttpFetch from "./HttpFetch";
import { jsonToFormData } from "@/utils/functions";

export const categoryService = {
  getCategories,
  create,
};

async function getCategories(idCategory: number | null = null) {
  const response = await HttpFetch.get(
    `/categories${idCategory ? `/${idCategory}` : ""}`
  );
  return response;
}

interface ICreateCategory {
  name: string;
}

async function create(payload: ICreateCategory) {
  const response = await HttpFetch.post(
    `/categories/save`,
    jsonToFormData(payload)
  );
  return response;
}
