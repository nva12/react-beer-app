export const fetchProducts = async (page = 1, perPage = 25) => {
  const rootEndpoint = `https://api.punkapi.com/v2/`;
  const endpoint = `${rootEndpoint}beers?page=${page}&per_page=${perPage}`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
