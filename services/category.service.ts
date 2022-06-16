import HttpFetch from "./HttpFetch";

export const categoryService = {
  getCategories,
};

interface IGetCategoryParams {
  idCategory: number | null;
}

async function getCategories({ idCategory = null }: IGetCategoryParams) {
  const response = await HttpFetch.get(
    `/categories${idCategory ? `/${idCategory}` : ""}`
  );
  return response;
}
