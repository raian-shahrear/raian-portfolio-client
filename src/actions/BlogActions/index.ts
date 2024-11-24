"use server";
import envConfig from "@/config";
import axiosInstance from "@/lib/AxiosInstance";
import { TFilterProps } from "@/types";
import { buildQueryParams } from "@/utils/buildQueryParams";
import { revalidateTag } from "next/cache";

// create blog
export const createBlog = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/blogs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("blog");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// delete blog
export const deleteBlog = async (blogId: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(`/blogs/${blogId}`);
    revalidateTag("blog");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// update blog
export const updateBlog = async (
  blogId: string,
  formData: FormData
): Promise<any> => {
  try {
    const { data } = await axiosInstance.patch(`/blogs/${blogId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("blog");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// get single blog
export const getSingleBlog = async (blogId: string): Promise<any> => {
  const fetchOption: RequestInit = {
    cache: "no-store",
  };
  const res = await fetch(`${envConfig.API_URL}/blogs/${blogId}`, fetchOption);
  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }
  return res.json();
};

// get all blogs
export const getAllBlogs = async (params: TFilterProps) => {
  const queryString = buildQueryParams(params);
  try {
    const { data } = await axiosInstance.get(`/blogs?${queryString}`);
    revalidateTag("blog");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
