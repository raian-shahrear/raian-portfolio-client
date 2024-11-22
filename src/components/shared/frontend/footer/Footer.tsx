import Link from "next/link";
import React from "react";

const FrontendFooter = () => {
  return (
    <div className="bg-gray-900 shadow-md">
      <footer className="gap-y-4 lg:container mx-auto items-center py-4 px-2 flex justify-between flex-col md:flex-row">
        <aside className="grid-flow-col justify-self-center md:justify-self-start">
          <Link href="/" className="text-xl font-bold flex gap-1">
            <span className="text-blue-500">{`Raian's`}</span>
            <span className="text-white">Portfolio</span>
          </Link>
        </aside>
        <p className="justify-self-center text-sm text-white">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default FrontendFooter;
