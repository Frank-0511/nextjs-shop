import HttpFetch from "./HttpFetch";

export const productService = {
  getCategories,
};

interface IGetProductParams {
  idProduct: number | null;
}

async function getCategories({ idProduct = null }: IGetProductParams) {
  const response = await HttpFetch.get(
    `/categories${idProduct ? `/${idProduct}` : ""}`
  );
  return response;
}
