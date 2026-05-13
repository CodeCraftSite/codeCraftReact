import { useQuery } from "@tanstack/react-query";
import UiDataAPI from "../api/UiApi";

export function useUiApi() {
  const uiData = useQuery({
    queryKey: ["uiData"],
    queryFn: UiDataAPI.getUiDataInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    uiData: uiData.data,
  };
}
