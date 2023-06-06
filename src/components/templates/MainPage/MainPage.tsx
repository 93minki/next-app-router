"use client";
import LoginForm from "@/components/organisms/LoginForm/LoginForm";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

type Inputs = {
  email: string;
  password: string;
};

const MainPage = () => {
  const router = useRouter();
  const loginHandler = async (inputs: Inputs) => {
    try {
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: inputs.email,
        password: inputs.password,
      });
      // const response = NextResponse.next();
      // response.cookies.set("jwt", res.data.jwt);
      console.log("res.data", res.data);
      setCookie("jwt", res.data.jwt, {
        httpOnly: true,
        secure: false,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginForm loginHandler={loginHandler} />;
};

export default MainPage;
