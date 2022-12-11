export interface Version {
  message: string;
  data: Data;
  status_code: number;
}

export interface Data {
  version: string;
}
