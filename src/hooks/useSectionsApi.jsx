import { useQuery } from "@tanstack/react-query";
import sectionsDataAPI from "../api/SectionsApi";

export function useSectionsApi() {
  const sections = useQuery({
    queryKey: ["sectionsBlock"],
    queryFn: sectionsDataAPI.getModalsInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    sections: sections.data,
  };
}
