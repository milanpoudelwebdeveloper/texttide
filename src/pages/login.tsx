import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import { loginSchema } from "@/validations/authValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { loginUser } from "@/services/auth";
import { toast } from "react-toastify";

interface ILoginData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginHandler = (data: FieldValues) => {
    loginUser(data as ILoginData)
      .then((res) => {
        toast.success(res?.message);
        router.push("/");
      })
      .catch((e) => toast.error(e));
  };

  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome Back</div>
        <div className=" text-xl font-light mb-14">Sign in to get explored</div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit(loginHandler)}
        >
          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mb-6 w-[75%]"
            register={register}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mb-2">
              {errors?.email?.message}
            </div>
          )}

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="mb-14 w-[75%]"
            register={register}
          />
          {errors.password && (
            <div className="text-red-500 text-sm mb-2">
              {errors?.password?.message}
            </div>
          )}
          <Button label="Sign in" type="submit" className="w-[75%] mb-2" />
        </form>
        <div>
          Don't have an account?
          <span
            className=" text-primary cursor-pointer underline"
            onClick={() => router.push("/register")}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
