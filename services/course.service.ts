import { AxiosResponse } from "axios";
import { CourseResponse } from "types/course.types";
import http from "./http.service";

export const getAPICourse = async (): Promise<AxiosResponse<CourseResponse>> => {
  return await http.get<CourseResponse>("https://api.codingthailand.com/api/course");
};
