import { QueryClient } from "@tanstack/react-query";

let queryClient = null;

export const getQueryClient = () => {
  if (!queryClient) {
    queryClient = new QueryClient();
  }
  return queryClient;
};

