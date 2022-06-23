import HttpFetch from "./HttpFetch";

export const productService = {
  getProducts,
};

async function getProducts(idProduct: number | null = null) {
  const response = await HttpFetch.get(
    `/products${idProduct ? `/${idProduct}` : ""}`
  );
  console.log(
    "🚀 ~ file: product.service.ts ~ line 11 ~ getProducts ~ response",
    response
  );
  return response;
}
