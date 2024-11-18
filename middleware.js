import { languageMiddleware } from "./middlewares/language";

export function middleware(request) {
  return languageMiddleware(request);
}
