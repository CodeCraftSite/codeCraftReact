import { useQuery } from "@tanstack/react-query";
import navigationAPI from "../api/NavigationApi";

export function useNavigationData() {
  const navigaionName = useQuery({
    queryKey: ["navigation"],
    queryFn: navigationAPI.getNavigation,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    navigations: navigaionName.data,
  };
}
