import { useQuery } from "@tanstack/react-query";
import contactAPI from "../api/ContactApi";

export function useContactApi() {
  const contactsInfo = useQuery({
    queryKey: ["contactsInfo"],
    queryFn: contactAPI.getContactInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    contactInfo: contactsInfo.data,
  };
}
