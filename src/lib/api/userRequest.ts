import { UserData } from "@/redux/store/slice/userSlice";
import axios from "axios";

type GetUserInfoProps = {
  url: string;
};
export const getUserInfo = ({ url }: GetUserInfoProps) => {
  const res = axios.get(`http://localhost:1337${url}`);
};

type LoginProps = {
  url: string;
  identifier: string;
  password: string;
};

export const postLogin = async ({ url, identifier, password }: LoginProps) => {
  const res = await axios.post<UserData>(`http://localhost:1337${url}`, {
    identifier,
    password,
  });

  return res.data;
};
