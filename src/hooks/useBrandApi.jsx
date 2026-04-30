import { useQuery } from "@tanstack/react-query";
import brandAPI from "../api/BrandApi";

export function useBrandData() {
  const brand = useQuery({
    queryKey: ["brandName"],
    queryFn: brandAPI.getBrand,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    brand: brand.data,
  };
}
