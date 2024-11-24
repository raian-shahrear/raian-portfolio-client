import {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateProject,
} from "@/actions/ProjectActions";
import { TFilterProps } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// create project
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => await createProject(projectData),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECT"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// delete project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: async (projectId: string) => await deleteProject(projectId),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECT"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// update project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<
    any,
    Error,
    { projectId: string; projectData: FormData },
    void
  >({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: async ({ projectId, projectData }) =>
      await updateProject(projectId, projectData),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECT"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// get single project
export const useGetSingleProject = (projectId: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_PROJECT", projectId],
    queryFn: () => getSingleProject(projectId),
    enabled: !!projectId,
  });
};

// get all projects
export const useGetAllProjects = (params?: TFilterProps) => {
  return useQuery({
    queryKey: ["GET_PROJECT", params],
    queryFn: async () => await getAllProjects(params || {}),
    staleTime: 0,
  });
};
