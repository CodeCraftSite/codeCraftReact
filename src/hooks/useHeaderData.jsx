import { useQuery } from "@tanstack/react-query";
import headerAPI from "../api/headerAPI";

export function useHeaderData() {
  const headerName = useQuery({
    queryKey: ["headerName"],
    queryFn: headerAPI.getNameHeader,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const headerDescription = useQuery({
    queryKey: ["headerDescription"],
    queryFn: headerAPI.getDescriptionHeader,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    refetchOnMount: false,
  });
  return {
    name: headerName.data,
    description: headerDescription.data,
    isLoading: headerName.isLoading || headerDescription.isLoading,
    error: headerName.error || headerDescription.error,
  };
}
