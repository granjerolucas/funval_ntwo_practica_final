"use client";

import { getQueryClient } from "@/src/query";
import { QueryClientProvider as Provider } from "@tanstack/react-query";

export default function QueryClientProvider({ children, session }) {
  return <Provider client={getQueryClient()}>{children}</Provider>;
}
