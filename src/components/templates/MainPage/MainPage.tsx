"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const MainPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email"));

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
          className="border-2 border-cyan-300 rounded-lg p-4"
        />
        {errors.email && <span>아이디를 입력해주세요</span>}
        <input
          placeholder="password"
          {...register("password", { required: true })}
          className="border-2 border-cyan-300 rounded-lg p-4"
        />
        {errors.password && <span>비밀번호를 입력해주세요</span>}
        <input
          type="submit"
          className="bg-cyan-400 rounded-lg p-2"
          value="Login"
        />
      </form>
    </div>
  );
};

export default MainPage;
