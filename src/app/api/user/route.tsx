import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "오투라인",
    subscription: "프리미엄",
    point: 1300,
    coupon: 5,
    notice: {
      coupon: {
        type: "coupon",
        title: "쿠폰이 도착했습니다.",
      },
      subscription: {
        type: "subscription",
        title: "프리미엄 이용권이 구매되었습니다.",
      },
      present: {
        type: "present",
        title: "선물이 도착했습니다.",
      },
    },
    folder: {
      folder1: {
        name: "초등5",
        count: 10,
      },
      folder2: {
        name: "중2 중간고사",
        count: 12,
      },
      folder3: {
        name: "수능대비",
        count: 20,
      },
    },
    paper: {
      paper1: {
        grade: "초등5학년",
        title: "초등5학년 2학기 기말대비",
        created_at: "23.05.23",
        tag: "시험대비",
      },
      paper2: {
        grade: "초등3학년",
        title: "초등3학년 1학기 기말대비",
        created_at: "23.05.24",
        tag: "주말숙제",
      },
      paper3: {
        grade: "초등6학년",
        title: "초등6학년 2학기 중간대비",
        created_at: "23.05.30",
        tag: "수능대비",
      },
    },
  });
}
