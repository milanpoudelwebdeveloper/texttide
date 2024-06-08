import { axiosInstance } from "../../axiosInstance";

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  country: string;
}
export const registerUser = async (data: IRegisterData) => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    console.log("the response is", res);
    if (res?.data) {
      return res.data;
    }
  } catch (e: any) {
    throw e.response.data.message || "Something went wrong while registering";
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    if (res?.data) {
      return res.data;
    }
  } catch (e: any) {
    throw e.response.data.message || "Something went wrong while logging in";
  }
};
