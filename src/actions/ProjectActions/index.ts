"use server"
import envConfig from "@/config";
import axiosInstance from "@/lib/AxiosInstance";
import { TFilterProps } from "@/types";
import { buildQueryParams } from "@/utils/buildQueryParams";
import { revalidateTag } from "next/cache";

// create project
export const createProject = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/projects", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("project");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// delete project
export const deleteProject = async (projectId: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(`/projects/${projectId}`);
    revalidateTag("project");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// update project
export const updateProject = async (
  projectId: string,
  formData: FormData
): Promise<any> => {
  try {
    const { data } = await axiosInstance.patch(
      `/projects/${projectId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    revalidateTag("project");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// get single project
export const getSingleProject = async (projectId: string): Promise<any> => {
  const fetchOption: RequestInit = {
    cache: "no-store",
  };
  const res = await fetch(
    `${envConfig.API_URL}/projects/${projectId}`,
    fetchOption
  );
  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }
  return res.json();
};

// get all projects
export const getAllProjects = async (params: TFilterProps) => {
  const queryString = buildQueryParams(params);
  try {
    const { data } = await axiosInstance.get(`/projects?${queryString}`);
    revalidateTag("project");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
