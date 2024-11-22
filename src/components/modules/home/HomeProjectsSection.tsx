"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import project1 from "@/assets/project/bookstore.png";
import project2 from "@/assets/project/psicoterapeuta.png";

const HomeProjectsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-gray-200 relative rounded-md shadow-xl">
        <div>
          <Image
            width={300}
            height={200}
            src={project1}
            alt="project"
            unoptimized
            className="w-full h-[300px] object-cover object-top rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="p-4">
          <div className="grid grid-cols-[auto_24px] gap-4 items-start border-b border-gray-400 pb-2 mb-2">
            <div>
              <p className="text-xl font-semibold">BookStore</p>
              <p className="text-base">A reselling bookstore website</p>
            </div>
            <Link href="/projects/1" className="text-blue-600 text-2xl">
              <FaArrowAltCircleRight />
            </Link>
          </div>
          <div className="mb-14">
            <p className="text-base">The main features :</p>
            <ul className="text-sm list-disc ps-[18px] flex flex-col gap-2">
              <li>
                Different functionalities have been added in the dashboard for
                Admin, Seller as well as Buyer roles.
              </li>
              <li>
                A payment system has been implemented using Stripe and payment
                history saved to the database.
              </li>
              <li>
                JWT (access token) has been used for Authorization to
                distinguish User, Seller and Admin roles.
              </li>
            </ul>
          </div>
          <div className="flex gap-3 absolute bottom-4">
            <Link
              href="https://bookstore-65836.web.app/"
              target="_blank"
              className="bg-blue-600 p-2 text-sm text-white rounded-md"
            >
              Live link
            </Link>
            <Link
              href="https://github.com/raian-shahrear/bookstore-client-side-a12"
              target="_blank"
              className="bg-gray-900 p-2 text-sm text-white rounded-md"
            >
              Git frontend
            </Link>
            <Link
              href="https://github.com/raian-shahrear/bookstore-server-side-a12"
              target="_blank"
              className="bg-gray-900 p-2 text-sm text-white rounded-md"
            >
              Live link
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 relative rounded-md shadow-xl">
        <div>
          <Image
            width={300}
            height={200}
            src={project2}
            alt="project"
            unoptimized
            className="w-full h-[300px] object-cover object-top rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="p-4">
          <div className="grid grid-cols-[auto_24px] gap-4 items-start border-b border-gray-400 pb-2 mb-2">
            <div>
              <p className="text-xl font-semibold">Tu Psicoterapeuta</p>
              <p className="text-base">A psychotherapy website</p>
            </div>
            <Link href="/projects/2" className="text-blue-600 text-2xl">
              <FaArrowAltCircleRight />
            </Link>
          </div>
          <div className="mb-14">
            <p className="text-base">The main features :</p>
            <ul className="text-sm list-disc ps-[18px] flex flex-col gap-2">
              <li>
                Users can send/edit/delete comments after login and can see
                others comments for individual services.
              </li>
              <li>
                Encoded user information to the server by using JSON Web Token
                (JWT) and worked after login.
              </li>
              <li>
                Data (Comments) have been added and shown in descending (latest)
                order from the MongoDB database.
              </li>
            </ul>
          </div>
          <div className="flex gap-3 absolute bottom-4">
            <Link
              href="https://tu-psicoterapeuta.web.app/"
              target="_blank"
              className="bg-blue-600 p-2 text-sm text-white rounded-md"
            >
              Live link
            </Link>
            <Link
              href="https://github.com/raian-shahrear/tu-psicoterapeuta-client-side-a11"
              target="_blank"
              className="bg-gray-900 p-2 text-sm text-white rounded-md"
            >
              Git frontend
            </Link>
            <Link
              href="https://github.com/raian-shahrear/tu-psicoterapeuta-server-side-a11"
              target="_blank"
              className="bg-gray-900 p-2 text-sm text-white rounded-md"
            >
              Live link
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 relative rounded-md shadow-xl">
        <div>
          <Image
            width={300}
            height={200}
            src={project2}
            alt="project"
            unoptimized
            className="w-full h-[300px] object-cover object-top rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="p-4">
          <div className="grid grid-cols-[auto_24px] gap-4 items-start border-b border-gray-400 pb-2 mb-2">
            <div>
              <p className="text-xl font-semibold">Tu Psicoterapeuta</p>
              <p className="text-base">A psychotherapy website</p>
            </div>
            <Link href="/projects/2" className="text-blue-600 text-2xl">
              <FaArrowAltCircleRight />
            </Link>
          </div>
          <div className="mb-14">
            <p className="text-base">The main features :</p>
            <ul className="text-sm list-disc ps-[18px] flex flex-col gap-2">
              <li>
                Users can send/edit/delete comments after login and can see
                others comments for individual services.
              </li>
              <li>
                Encoded user information to the server by using JSON Web Token
                (JWT) and worked after login.
              </li>
              <li>
                Data (Comments) have been added and shown in descending (latest)
                order from the MongoDB database.
              </li>
            </ul>
          </div>
          <div className="flex gap-3 absolute bottom-4">
            <Link
              href="https://tu-psicoterapeuta.web.app/"
              target="_blank"
              className="bg-blue-600 p-2 text-sm text-white rounded-md"
            >
              Live link
            </Link>
            <Link
              href="https://github.com/raian-shahrear/tu-psicoterapeuta-client-side-a11"
              target="_blank"
              className="bg-gray-900 p-2 text-sm text-white rounded-md"
            >
              Git frontend
            </Link>
            <Link
              href="https://github.com/raian-shahrear/tu-psicoterapeuta-server-side-a11"
              target="_blank"
              className="bg-gray-900 p-2 text-sm text-white rounded-md"
            >
              Live link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectsSection;
