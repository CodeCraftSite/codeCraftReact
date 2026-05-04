import { useQuery } from "@tanstack/react-query";
import mainContentAPI from "../api/MainContentApi";

export function useMainApi() {
  const mainContent = useQuery({
    queryKey: ["mainContent"],
    queryFn: mainContentAPI.getMain,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    main: mainContent.data,
  };
}
