"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

interface LoginFormProps {
  loginHandler: (inputs: Inputs) => void;
}

const LoginForm = () => {
  const loginHandler = async (inputs: Inputs) => {
    try {
      // const res = await signIn("credentials", {
      //   email: inputs.email,
      //   password: inputs.password,
      //   callbackUrl: "/dashboard",
      // });
      // console.log("signin res", res);

      const res = await axios.get("http://127.0.0.1:1337/api/users/me", {
        // headers: {
          
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg1OTU2NTQxLCJleHAiOjE2ODg1NDg1NDF9.wEmtHC7UM1_ATfw93QfNehtWAFHhz9VytkGburlp-Jk",
        
        // },
      
      });

      console.log("res result", res.data);

      // const res = await axios.post("/api/auth/login", {
      //   identifier: inputs.email,
      //   password: inputs.password,
      // });
      // const response = NextResponse.next();
      // response.cookies.set("jwt", res.data.jwt);
      // setCookie("jwt", res.data.jwt, {
      //   httpOnly: false,
      //   secure: false,
      // });
      // router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (inputData) => {
    //
    loginHandler(inputData);
  };

  return (
    <div className="w-1/2 text-center my-0 mx-auto h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-semibold mb-4">Login Page~</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <input
          placeholder="email"
          {...register("email")}
          type="email"
          disabled={isSubmitting}
          className="border-2 border-cyan-300 rounded-lg p-4"
        />
        {errors.email && <span>아이디를 입력해주세요</span>}
        <input
          type="password"
          placeholder="password"
          disabled={isSubmitting}
          {...register("password", { required: true })}
          className="border-2 border-cyan-300 rounded-lg p-4"
        />
        {errors.password && <span>비밀번호를 입력해주세요</span>}
        <input
          type="submit"
          className="bg-cyan-400 rounded-lg p-2"
          disabled={isSubmitting}
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
