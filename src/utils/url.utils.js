export const baseUrl = (path) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL || ""}/${path}`;
};
