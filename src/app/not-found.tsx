import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <div className="text-center">
        <p className="text-4xl lg:text-6xl font-semibold mb-4">404</p>
        <p className="text-gray-500 text-2xl lg:text-3xl font-semibold">
          Opps! Page not Found!
        </p>
      </div>
      <div>
        <Link
          href="/"
          className="bg-gray-900 text-white rounded-sm p-2 text-base"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
