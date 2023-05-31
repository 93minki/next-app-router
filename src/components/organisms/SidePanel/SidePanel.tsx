"use client";

import Link from "next/link";

const SidePanel = () => {
  return (
    <nav className="h-[calc(75%-1rem)] border-2 border-slate-800 rounded-lg">
      <ul className="pt-8 flex flex-col space-y-8 p-4">
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
