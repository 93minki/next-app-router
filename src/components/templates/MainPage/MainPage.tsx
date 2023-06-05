"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import useSWR from "swr";

type Inputs = {
  email: string;
  password: string;
};

const MainPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (inputData) => {
    try {
      // TypeScript 문제...
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: inputData.email,
        password: inputData.password,
      });

      // 함수 컴포넌트 에서만 SWR을 쓸 수 있음 동적인 이벤트 핸들러 내부에서 사용 불가
      // const swrData = useSWR(["api/auth/local", inputData], async (params) => {
      //   const res = await axios.post(`http://localhost:1337${params[0]}`, {
      //     identifier: params[1].email,
      //     password: params[1].password,
      //   });
      //   return res.data;
      // });
      // console.log("swrData", swrData)

      // 여기서 로그인에 성공하면 토큰을 어딘가 저장하고 dashboard로 이동하게만 하면 될듯?
      // 유저 정보를 검증하고 사용하는 건 dashboard에서

      const { jwt } = res.data;
      localStorage.setItem("jwt", jwt);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
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

export default MainPage;
