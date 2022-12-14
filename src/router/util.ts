import { Paths } from "@/configs";
import { RouteLocationNormalized } from "vue-router";

export function isLoginPath(routerRaw: RouteLocationNormalized): boolean {
  return routerRaw.path === Paths.Login;
}
