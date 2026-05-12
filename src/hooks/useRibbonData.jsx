import { useQuery } from "@tanstack/react-query";
import ribbonAPI from "../api/RibbonApi";

export function useRibbonData() {
  const ribbonData = useQuery({
    queryKey: ["ribbon"],
    queryFn: ribbonAPI.getRibbonInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    ribbon: ribbonData.data,
  };
}
