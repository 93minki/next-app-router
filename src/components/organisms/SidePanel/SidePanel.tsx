"use client";

import { UserInfoProps } from "@/type/userInfo";
import axios from "axios";
import Link from "next/link";
import { cache, use, useEffect, useState } from "react";

const delayFetch = cache(
  async (url: string, delay: number): Promise<UserInfoProps> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url, { cache: "no-store" })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }, delay);
    });
  }
);

const SidePanel = () => {

  console.log("SidePanel Before");
  const delayData = use(delayFetch("http://localhost:3000/api/user", 3000));
  // const delayData = use(axios.get("http://localhost:3000/api/user"));
  console.log("delayData", delayData);
  console.log("SidePanel After");

  return (
    <nav className="h-[calc(75%-1rem)] border-2 border-slate-800 rounded-lg">
      <ul className="pt-8 flex flex-col space-y-8 p-4">
        <button >test</button>
        <Link href="/" className="text-lg">
          ✨ 대시보드
        </Link>
        <Link href="/" className="text-lg">
          🧑 프로필 관리
        </Link>
        <Link href="/" className="text-lg">
          💳 이용권 관리
        </Link>
        <Link href="/" className="text-lg">
          📁 내 시험지
        </Link>
        <Link href="/" className="text-lg">
          📞 고객센터
        </Link>
      </ul>
    </nav>
  );
};

export default SidePanel;
