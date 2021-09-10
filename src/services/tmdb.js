const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "5eed0df086924f06e5e1149ebdd2ae4c";

export const imgUrl = {
  small: "https://image.tmdb.org/t/p/w185",
  medium: "https://image.tmdb.org/t/p/w500",
  large: "https://image.tmdb.org/t/p/w1280",
};

const get = async (endpoint, params) => {
  params = { ...params, api_key: apiKey };

  const url =
    baseUrl +
    endpoint +
    "?" +
    Object.entries(params)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");

  const response = await fetch(url);
  return await response.json();
};

export const getNowPlaying = async (page) => {
  return await get("/movie/now_playing", { page });
};

export const getPopular = async (page) => {
  return await get("/movie/popular", { page });
};

export const getTopRated = async (page) => {
  return await get("/movie/top_rated", { page });
};

export const getMovieById = async (id) => {
  return await get("/movie/" + id, {
    append_to_response: "credits,recommendations",
  });
};

export default {
  imgUrl,
  getNowPlaying,
  getPopular,
  getTopRated,
  getMovieById,
};
