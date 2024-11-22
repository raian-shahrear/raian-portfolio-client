"use client";
import Link from "next/link";
import { PiBagSimpleFill } from "react-icons/pi";

const HomeExperienceSection = () => {
  return (
    <ul className="text-sm text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-3">
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <PiBagSimpleFill />
          </span>
          <span>Frontend Developer (Full-time)</span>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>
            - Company :{" "}
            <Link
              href="https://www.byteshake.com"
              target="_blank"
              className="underline transition-all duration-300 hover:no-underline"
            >
              ByteShake LTD.
            </Link>{" "}
            (Offshore partner of the{" "}
            <Link
              href="https://www.nextgenitltd.com"
              target="_blank"
              className="underline transition-all duration-300 hover:no-underline"
            >
              Nextgen Innovation LTD.
            </Link>
            ) at UK.
          </span>
          <span>- Duration : Dec, 2023 - Aug, 2024 (9m)</span>
          <span>- Location : Remote</span>
          <span>
            - Responsibility : My key responsibility was to collaborate with the
            offshore team as well as work on their existing projects or from
            sketch with raw HTML, CSS & JavaScript and also worked in wordpress
            for sometime.
          </span>
        </div>
      </li>
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <PiBagSimpleFill />
          </span>
          <span>Frontend Developer (Full-time)</span>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>
            - Company :{" "}
            <Link
              href="https://www.nextgenitltd.com"
              target="_blank"
              className="underline transition-all duration-300 hover:no-underline"
            >
              Nextgen Innovation LTD.
            </Link>{" "}
            at Dhaka.
          </span>
          <span>- Duration : Jan, 2023 - Aug, 2024 (1y 7m)</span>
          <span>- Location : On-site</span>
          <span>
            - Responsibility : I was responsible for designing frontend using
            React.js and raw HTML, CSS & JavaScript. Also, I have to work with
            the backend team while the technology is Node.js and MongoDB or
            MySQL as a database.
          </span>
        </div>
      </li>
    </ul>
  );
};

export default HomeExperienceSection;
