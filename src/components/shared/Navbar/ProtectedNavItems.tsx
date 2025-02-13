"use client";
import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import { useUser } from "@/context/userProvider";
import { Bell, Contact, House, Info, MessageSquareText, Settings } from "lucide-react";
import Link from "next/link";
import { ProfileUtilsPopover } from "./ProfileUtilsPopover";

const ProtectedNavItems = () => {
  const { user } = useUser();
  return user ? (
    <>
      <Link href={"/"}>
        <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer ">
          <House size={18} strokeWidth={1} />
        </li>
      </Link>

      <li className="w-24 h-9 rounded-sm flex items-center justify-center bg-gray-200 cursor-pointer relative gap-2 px-3">
        <Link href="/about-us" className="flex items-center gap-1">
          About <Info strokeWidth={1} size={18} />
        </Link>
      </li>


      <li className="w-24 h-9 rounded-sm flex items-center justify-center bg-gray-200 cursor-pointer relative gap-2 px-3">
        <Link href="/" className="flex items-center gap-1">
          Message <MessageSquareText strokeWidth={1} size={18} />
        </Link>
      </li>


      <li className="w-24 h-9 rounded-sm flex items-center justify-center bg-gray-200 cursor-pointer relative gap-2 px-3">
        <Link href="/" className="flex items-center gap-1">
          Notification <Bell strokeWidth={1} size={18} />
        </Link>
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full transition-all duration-500 ease-in-out"></span>
      </li>


      <li className="w-24 h-9 rounded-sm flex items-center justify-center bg-gray-200 cursor-pointer relative gap-2 px-3">
        <Link href="/contact-us" className="flex items-center gap-1">
          Contact <Contact strokeWidth={1} size={18} />
        </Link>
      </li>

      <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer">
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


