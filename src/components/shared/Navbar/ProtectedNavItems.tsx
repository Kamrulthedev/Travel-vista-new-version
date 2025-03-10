"use client";
import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import { useUser } from "@/context/userProvider";
import { Bell, Contact, House, Info, LayoutDashboard, MessageSquareText } from "lucide-react";
import Link from "next/link";
import { ProfileUtilsPopover } from "./ProfileUtilsPopover";

const ProtectedNavItems = () => {
  const { user } = useUser();

  const navItems = [
    {
      id: 3,
      title: "",
      path: "/dashboard",
      isPrivate: true,
    },
  ].filter((item) => {
    if (item.isPrivate) {
      return user?.role === "admin";
    }
    return true;
  });

  return user ? (
    <>
      <Link href={"/"}>
        <li className="w-9 h-9 rounded-sm flex justify-center items-center hover:bg-gray-200 cursor-pointer">
          <House size={18} strokeWidth={2} className="text-black"/>
        </li>
      </Link>

      <li className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-gray-200 cursor-pointer">
        <Link href="/about-us">
         <Info  strokeWidth={2}  size={18} className="text-black"/>
        </Link>
      </li>

      <li className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-gray-200 cursor-pointer px-2">
        <Link href="/">
          <MessageSquareText  strokeWidth={2}  size={18} className="text-black" />
        </Link>
      </li>

      <li className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-gray-200 cursor-pointer relative px-2">
        <Link href="/">
          <Bell  strokeWidth={2}  size={18} className="text-black" />
        </Link>
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full transition-all duration-500 ease-in-out"></span>
      </li>

      <li className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-gray-200 cursor-pointer px-2">
        <Link href="/contact-us" className="flex items-center gap-1 text-sm">
           <Contact  strokeWidth={2}  size={18} className="text-black" />
        </Link>
      </li>

      {navItems.map((navItem) => (
        <li key={navItem.id} className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-gray-200 cursor-pointer px-2">
          <Link href={navItem.path} className="text-sm">
            <LayoutDashboard></LayoutDashboard>
            {navItem.title}
          </Link>
        </li>
      ))}

      <li className="w-10 h-10 flex justify-center items-center cursor-pointer">
        <ProfileUtilsPopover />
      </li>
    </>
  ) : (
    <li>
      <SignInFormModal />
    </li>
  );
};

export default ProtectedNavItems;
