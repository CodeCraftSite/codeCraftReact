import { useQuery } from "@tanstack/react-query";
import lensDataAPI from "../api/LensApi";

export function useLensApi() {
  const lens = useQuery({
    queryKey: ["lensData"],
    queryFn: lensDataAPI.getLensInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    lens: lens.data,
  };
}
