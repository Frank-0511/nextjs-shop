import HttpFetch from "./HttpFetch";

export const categoryService = {
  getCategories,
};

async function getCategories(idCategory: number | null = null) {
  const response = await HttpFetch.get(
    `/categories${idCategory ? `/${idCategory}` : ""}`
  );
  return response;
}
