import { LoginResponse, UserInfo } from "@/type/userInfo";
import axios from "axios";

type GetUserInfoProps = {
  url: string;
  token: string;
};
export const getUserInfo = async ({ url, token }: GetUserInfoProps) => {
  const res = await axios.get<UserInfo>(`http://localhost:1337${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

type LoginProps = {
  url: string;
  identifier: string;
  password: string;
};

export const postLogin = async ({ url, identifier, password }: LoginProps) => {
  const res = await axios.post<LoginResponse>(`http://localhost:1337${url}`, {
    identifier,
    password,
  });

  return res.data;
};
