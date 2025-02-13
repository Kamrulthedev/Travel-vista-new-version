"use client";
import { useUser } from "@/context/userProvider";
import Link from "next/link";

const NavListItems = () => {
  const { user } = useUser();

  const navItems = [

    {
      id: 3,
      title: "Admin Dashboard",
      path: "/dashboard",
      isPrivate: true,
    },
  ].filter((item) => {
    if (item.isPrivate) {
      return user?.role === "admin";
    }
    return true;
  });
  return (
    <>
      {navItems.map((navItem) => (
        <li key={navItem.id} className="font-serif">
          <Link href={navItem.path} className="">
            {navItem.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavListItems;
