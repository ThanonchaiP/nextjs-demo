import { AxiosResponse } from "axios";
import { Version } from "types/version.types";
import http from "./http.service";

export const getAPIVersion = async (): Promise<AxiosResponse<Version>> => {
  return await http.get<Version>("https://api.codingthailand.com/api/version");
};
