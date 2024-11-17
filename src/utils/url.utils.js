export const NEXT_PUBLIC_NEWS_API_URL = (path) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};
export const baseUrl = (path) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`;
};
