"use client";
import profile from "@/assets/contact/Raian.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const HomeContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm();

  const handleContactForm: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const newSubmission = {
          name: data.name,
          email: data.email,
          feedback: data.feedback,
        };
        toast.success(`Thanks ${newSubmission?.name} for your feedback!`);
        reset();
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] xl:grid-cols-[auto_600px] 2xl:grid-cols-[auto_700px] gap-y-10 gap-x-20 xl:gap-x-40">
      <div className="grid grid-cols-[150px_auto] items-center gap-6 w-full">
        <Image
          width={150}
          height={150}
          src={profile}
          alt="profile"
          className="rounded-md"
        />
        <div>
          <ul className="text-gray-300 flex flex-col gap-1">
            <li className="text-lg grid grid-cols-[16px_auto] gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="text-lg grid grid-cols-[16px_auto] gap-2 items-center">
              <span>
                <IoLogoWhatsapp />
              </span>
              <span>+880 1944920233</span>
            </li>
            <li className="text-lg grid grid-cols-[16px_auto] gap-2 items-center">
              <span>
                <MdEmail />
              </span>
              <span>raianshahrearbd@gmail.com</span>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-6">
            <Link
              href="https://github.com/raian-shahrear"
              target="_blank"
              className="text-lg text-gray-300 transition-all duration-300 hover:text-blue-500"
            >
              <FaGithubSquare />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raian-shahrear"
              target="_blank"
              className="text-lg text-gray-300 transition-all duration-300 hover:text-blue-500"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/raian.shahrear.9"
              target="_blank"
              className="text-lg text-gray-300 transition-all duration-300 hover:text-blue-500"
            >
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-6 rounded-md w-full">
        <p className="text-gray-200 text-lg text-center mb-4">Contact Form</p>
        <form
          onSubmit={handleSubmit(handleContactForm)}
          className="flex flex-col gap-2"
        >
          <div>
            <label className="text-sm text-gray-200 mb-1 inline-block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="your name..."
              className="px-3 py-2 text-sm rounded-md w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500 mt-[2px] inline-block">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-200 mb-1 inline-block">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="your email..."
              className="px-3 py-2 text-sm rounded-md w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-[2px] inline-block">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-200 mb-1 inline-block">
              Your Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="write something..."
              className="px-3 py-2 text-sm rounded-md w-full min-h-24"
              {...register("feedback", { required: true })}
            ></textarea>
            {errors.feedback && (
              <span className="text-xs text-red-500 mt-[2px] inline-block">
                This field is required
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <Button className="w-fit h-fit px-10 bg-gray-600 hover:bg-gray-700">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeContactSection;
