"use client";
import Link from "next/link";
import { FaAward } from "react-icons/fa";

const HomeCertificateSection = () => {
  return (
    <ul className="text-sm text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-3">
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <FaAward />
          </span>
          <Link
            href="https://drive.google.com/file/d/1H07TLsJeCuNWRLDpKYrnf_4hZSvwWTlC/view"
            target="_blank"
            className="underline transition-all duration-300 hover:no-underline"
          >
            Complete Web Development Course (MERN stack)
          </Link>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>- From : Programming Hero</span>
          <span>- Time : Jun 30, 2022 - Dec 02, 2022</span>
        </div>
      </li>
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <FaAward />
          </span>
          <Link
            href="https://www.coursera.org/account/accomplishments/verify/S2D3WQZG2BXU"
            target="_blank"
            className="underline transition-all duration-300 hover:no-underline"
          >
            Programming for Everybody (Getting Started with Python and Python
            Data Structures)
          </Link>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>- From : Coursera</span>
          <span>- Time : Aug 2020</span>
        </div>
      </li>
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <FaAward />
          </span>
          <Link
            href="https://drive.google.com/drive/folders/135PjZZ_HOyi_1LFjnran-6E7vCxlAwIX?usp=share_link"
            target="_blank"
            className="underline transition-all duration-300 hover:no-underline"
          >
            Cisco Certified Network Associate
          </Link>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>- From : AIUB Institute of Continuing Education</span>
          <span>- Time : Sep 12, 2020 - Feb 01, 2021</span>
        </div>
      </li>
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <FaAward />
          </span>
          <Link
            href="/"
            target="_blank"
            className="underline transition-all duration-300 hover:no-underline"
          >
            Best Capstone Project and Thesis ({`Dean's award`})
          </Link>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>- From : American International University-Bangladesh</span>
          <span>- Time : Dec 24, 2019</span>
        </div>
      </li>
    </ul>
  );
};

export default HomeCertificateSection;
