"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = () => {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link
          href="/"
          className={`me-1 font-semibold text-sm py-2 px-3 rounded-md transition-all duration-300 hover:text-white ${
            pathname === "/" ? "text-white  bg-gray-900" : "text-gray-400"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className={`me-1 font-semibold text-sm py-2 px-3 rounded-md transition-all duration-300 hover:text-white ${
            pathname === "/projects" ? "text-white  bg-gray-900" : "text-gray-400"
          }`}
        >
          My Projects
        </Link>
      </li>
      <li>
        <Link
          href="/blogs"
          className={`me-1 font-semibold text-sm py-2 px-3 rounded-md transition-all duration-300 hover:text-white ${
            pathname === "/blogs" ? "text-white  bg-gray-900" : "text-gray-400"
          }`}
        >
          Blogs
        </Link>
      </li>
    </>
  );
};

export default NavbarItems;
