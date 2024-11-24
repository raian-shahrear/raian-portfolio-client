"use client";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { SidebarControllerProps } from "../sidebar/Sidebar";
import { useUser } from "@/context/user.provider";
import DotsLoader from "@/components/ui/loading/DotsLoader";
import Link from "next/link";

const DashboardNavbar = ({
  setControlSidebar,
  controlSidebar,
}: SidebarControllerProps) => {
  const { user, isLoading: userLoading } = useUser();
  return (
    <div className="h-12 border-b px-5 flex justify-between items-center bg-slate-50">
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setControlSidebar(!controlSidebar)}
      >
        <span
          className={`${
            controlSidebar ? "hidden lg:inline-block" : "inline-block lg:hidden"
          }`}
        >
          <RiMenuUnfoldFill />
        </span>
        <span
          className={`${
            controlSidebar ? "inline-block lg:hidden" : "hidden lg:inline-block"
          }`}
        >
          <RiMenuFoldFill />
        </span>
      </div>
      {userLoading ? (
        <DotsLoader />
      ) : (
        <div className="flex items-center gap-10">
          <Link
            href="/dashboard"
            className="cursor-pointer flex items-center gap-2"
          >
            <div className="flex flex-col gap-[2px] max-w-28">
              <p className="text-xs font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
                {user?.userName}
              </p>
              <p className="text-xs font-medium">{user?.role}</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
