"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/lib/AxiosInstance";

// login user
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message };
  }
};

// logout user
export const logoutUser = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

// get current loggedIn user
export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return decodedToken;
  }
  return decodedToken;
};

// get accessToken from refreshToken
export const getNewAccessToken = async () => {
  const currentTime = new Date().getTime() / 1000;
  try {
    const refreshToken = cookies().get("refreshToken")?.value;
    if (refreshToken) {
      const decodedToken = await jwtDecode(refreshToken);
      if (decodedToken && currentTime > decodedToken.exp!) {
        logoutUser();
      }
    }
    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
