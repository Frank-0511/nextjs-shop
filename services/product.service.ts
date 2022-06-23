import HttpFetch from "./HttpFetch";
import { jsonToFormData } from "@/utils/functions";

export const productService = {
  getProducts,
  create,
};

async function getProducts(idProduct: number | null = null) {
  const response = await HttpFetch.get(
    `/products${idProduct ? `/${idProduct}` : ""}`
  );
  return response;
}

interface ICreateProduct {
  name: string;
}

async function create(payload: ICreateProduct) {
  const response = await HttpFetch.post(
    `/products/save`,
    jsonToFormData(payload)
  );
  return response;
}
