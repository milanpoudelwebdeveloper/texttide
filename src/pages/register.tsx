import { useRouter } from "next/router";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FieldValues, useForm } from "react-hook-form";
import { IRegisterData, registerUser } from "@/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/validations/authValidations";
import { countries } from "@/constants/countries";
import ErrorText from "@/components/Common/ErrorText";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const submitHandler = (data: FieldValues) => {
    registerUser(data as IRegisterData)
      .then((res) => {
        toast.success(res?.message);
        router.push("/login");
      })
      .catch((e) => toast.error(e));
  };

  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className="pt-36 pb-10 bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center overflow-y-auto">
        <div className=" text-4xl font-extrabold">Welcome!</div>
        <div className=" text-xl font-light mb-14">Sign up to get started</div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Input
            name="name"
            label="Full name"
            placeholder="Enter your full name"
            className="mb-6 w-[75%]"
            type="text"
            register={register}
          />
          {errors.name && (
            <ErrorText message={errors?.name?.message as string} />
          )}

          <Input
            name="email"
            label="Email address"
            type="email"
            placeholder="Enter your email"
            className="mb-6 w-[75%]"
            register={register}
          />
          {errors.email && (
            <ErrorText message={errors?.email?.message as string} />
          )}
          <div className="mb-6 w-[75%]">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Country
            </label>
            <select
              {...register("country")}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            >
              {countries?.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {errors.country && (
              <ErrorText message={errors?.country?.message as string} />
            )}
          </div>

          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            className="mb-6 w-[75%]"
            register={register}
          />
          {errors.password && (
            <ErrorText message={errors?.password?.message as string} />
          )}
          <Input
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Enter your Password"
            className="w-[75%]"
            register={register}
          />
          {errors.confirmPassword && (
            <ErrorText message={errors?.confirmPassword?.message as string} />
          )}
          <Button
            label="Sign up"
            type="submit"
            className="w-[75%] mb-2 mt-14"
          />
        </form>
        <div>
          "Already have an account?"{" "}
          <span
            className=" text-primary cursor-pointer underline"
            onClick={() => router.push("/login")}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
