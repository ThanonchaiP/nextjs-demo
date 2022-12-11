export interface CourseResponse {
  data: Course[];
  meta: Meta;
}

export interface Course {
  id: number;
  title: string;
  detail: string;
  date: string;
  view: number;
  picture: string;
}

export interface Meta {
  status: string;
  status_code: number;
}
