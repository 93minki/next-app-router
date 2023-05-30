import { NextResponse } from "next/server";

const GET = async () => {
  const post = [
    {
      id: 1,
      title: "Post1",
      content: "Hello World!",
    },
    {
      id: 2,
      title: "Post2",
      content: "Hello O2line!",
    },
  ];

  return NextResponse.json({post});
};

export { GET };
