"use client";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useUser } from "@/context/user.provider";
import { useLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import CommonLoader from "@/components/ui/loading/CommonLoader";

const LoginForm = () => {
  const { setIsLoading: setUserLoading } = useUser();
  const { mutate: handleUserLogin, isPending } = useLogin();
  const [showPass, setShowPass] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const newLogin = {
          email: data.email,
          password: data.password,
        };
        handleUserLogin(newLogin);
        reset();
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };

  useEffect(() => {
    if (!isPending) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/dashboard");
      }
      setUserLoading(true);
    }
  }, [isPending, redirect]);
  return (
    <>
      {isPending ? (
        <div className="h-[20vh] flex justify-center items-center">
          <CommonLoader />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-8 items-center"
        >
          <div className="w-full grid grid-cols-1 gap-5">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Password<span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="border border-gray-300 w-full h-9 pl-2 pr-8 py-1 text-sm rounded-sm"
                  placeholder="Enter password"
                  {...register("password", { required: true })}
                />
                <span
                  className="cursor-pointer text-lg absolute top-[9px] right-2"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              </div>
              {errors.password && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white w-fit h-fit text-sm py-2 px-4 rounded flex items-center gap-1"
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
