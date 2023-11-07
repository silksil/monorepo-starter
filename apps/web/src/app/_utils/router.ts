import { headers } from "next/headers";

export const getPathnameInServer = () => {
  return headers().get("x-invoke-path") || "";
};
