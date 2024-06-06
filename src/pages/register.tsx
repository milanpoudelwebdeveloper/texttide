import { useRouter } from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import LayoutWrapper from "../components/LayoutWrapper";

const Register = () => {
  const router = useRouter();
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome!</div>
        <div className=" text-xl font-light mb-14">Sign up to get started</div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={(e) => console.log(e)}
        >
          <Input
            label="Full name"
            name="name"
            placeholder="Enter your full name"
            className="mb-6 w-[75%]"
            type="text"
            value=""
            isRequired
            onChange={(e) => console.log(e)}
          />

          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mb-6 w-[75%]"
            value=""
            onChange={(e) => console.log(e)}
            isRequired
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="mb-14 w-[75%]"
            value=""
            onChange={(e) => console.log(e)}
            isRequired
          />
          <Button label="Sign up" type="submit" className="w-[75%] mb-2" />
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
