import { useQuery } from "@tanstack/react-query";
import projectTypeAPI from "../api/ProjectTypesApi";

export function useProjectType() {
  const projectTypes = useQuery({
    queryKey: ["projectType"],
    queryFn: projectTypeAPI.getprojectTypeInfo,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return {
    projectTypes: projectTypes.data,
  };
}
