import { Province } from "models/province.model";
import useSWR from "swr";

//use SWR
export function useGetProvince() {
  const { data, error } = useSWR<Province[], Error>(`/api/province/`);

  return {
    province: data,
    isLoading: !error && !data,
    isError: error,
  };
}
