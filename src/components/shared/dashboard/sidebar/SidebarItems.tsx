"use client";

import { logoutUser } from "@/actions/AuthActions";
import DotsLoader from "@/components/ui/loading/DotsLoader";
import { protectedRoutes } from "@/constant";
import { useUser } from "@/context/user.provider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";

const SidebarItems = () => {
  const { setIsLoading: setUserLoading, isLoading: userLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    setUserLoading(true);
    if (protectedRoutes.includes(pathname)) {
      router.push("/login");
    }
  };
  return (
    <>
      {userLoading ? (
        <div className="flex justify-center items-center h-[65vh]">
          <DotsLoader />
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 w-full text-sm font-medium tracking-wide px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 ${
                pathname === "/dashboard"
                  ? "text-gray-900  bg-gray-200"
                  : "text-gray-500"
              }`}
            >
              <span className="text-lg">
                <MdOutlineSpaceDashboard />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/manage-project"
              className={`flex items-center gap-2 w-full text-sm font-medium tracking-wide px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 ${
                pathname === "/dashboard/manage-project"
                  ? "text-gray-900  bg-gray-200"
                  : "text-gray-500"
              }`}
            >
              <span className="text-lg">
                <IoSettingsOutline />
              </span>
              <span>Manage Project</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/manage-blog"
              className={`flex items-center gap-2 w-full text-sm font-medium tracking-wide px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 ${
                pathname === "/dashboard/manage-blog"
                  ? "text-gray-900  bg-gray-200"
                  : "text-gray-500"
              }`}
            >
              <span className="text-lg">
                <IoSettingsOutline />
              </span>
              <span>Manage Blog</span>
            </Link>
          </li>
          <li onClick={() => handleLogout()}>
            <button className="flex items-center justify-start gap-2 w-full text-sm font-medium tracking-wide text-gray-500 px-4 py-2 rounded-[40px] transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
              <span className="text-lg">
                <MdOutlineLogout />
              </span>
              Logout
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default SidebarItems;
