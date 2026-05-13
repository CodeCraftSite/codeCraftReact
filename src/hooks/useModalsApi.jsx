import { useQuery } from "@tanstack/react-query";
import modalsDataAPI from "../api/ModalsApi";

export function useModalsApi() {
  const modals = useQuery({
    queryKey: ["modalsBlock"],
    queryFn: modalsDataAPI.getModalsInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    modals: modals.data,
  };
}
