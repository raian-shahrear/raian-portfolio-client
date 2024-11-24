import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
} from "@/actions/BlogActions";
import { TFilterProps } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// create blog
export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (blogData) => await createBlog(blogData),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["GET_BLOG"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// delete blog
export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_BLOG"],
    mutationFn: async (blogId: string) => await deleteBlog(blogId),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["GET_BLOG"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// update blog
export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, { blogId: string; blogData: FormData }, void>({
    mutationKey: ["UPDATE_BLOG"],
    mutationFn: async ({ blogId, blogData }) =>
      await updateBlog(blogId, blogData),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["GET_BLOG"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// get single blog
export const useGetSingleBlog = (blogId: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_BLOG", blogId],
    queryFn: () => getSingleBlog(blogId),
    enabled: !!blogId,
  });
};

// get all blogs
export const useGetAllBlogs = (params?: TFilterProps) => {
  return useQuery({
    queryKey: ["GET_BLOG", params],
    queryFn: async () => await getAllBlogs(params || {}),
    staleTime: 0,
  });
};
