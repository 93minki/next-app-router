"use client";

import Logo from "@/components/atoms/Logo/Logo";
import NavLow from "@/components/molecules/NavLow/NavLow";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";
import axios from "axios";
import { useRouter } from "next/navigation";
import useSWR from "swr";
/**
 * "use Client"를 사용하면 하위에 있는 자식 컴포넌트도 모두 Client 컴포넌트가 되는가?
 *
 */

export interface UserDatas {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  point: string;
  subscription: string;
  coupon: number;
  notice: Notice;
}

export interface Notice {
  coupon: Coupon;
  subscription: Coupon;
  present: Coupon;
}

export interface Coupon {
  type: string;
  title: string;
}

const fetcher = async (params: string[]) => {
  const res = await axios.get<UserDatas>(`http://localhost:1337${params[0]}`, {
    headers: {
      Authorization: `Bearer ${params[1]}`,
    },
  });
  return res.data;
};

const Header = () => {
  // const { data, error } = useSWR(["/api/users/me", jwt], fetcher);
  // console.log("SWR Data", data);
  return (
    <header className="flex justify-between border-2 border-slate-800 p-4 items-center rounded-lg">
      <Logo />
      <NavLow />
      <UserAvatarName />
    </header>
  );
};

export default Header;
