import LoginPage from "@/components/templates/LoginPage/LoginPage";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <LoginPage />;
};
export default Login;
