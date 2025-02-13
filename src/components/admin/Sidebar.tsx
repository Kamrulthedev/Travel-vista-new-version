"use client";
import {
  ChartNoAxesCombined,
  LayoutDashboard,
  SquareChartGantt,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCreditCard, FaHome, FaShieldAlt, FaSyncAlt, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const listItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      id: 2,
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: 3,
      title: "User Management",
      path: "/dashboard/manage-user",
      icon: <UserRoundCog />,
    },
    {
      id: 4,
      title: "Posts Management",
      path: "/dashboard/manage-post",
      icon: <SquareChartGantt />,
    },
    {
      id: 5,
      title: "Site Analytics",
      path: "/dashboard/analytics",
      icon: <ChartNoAxesCombined />,
    },
    {
      id: 6,
      title: "Manage Payments",
      path: "/dashboard/manage-payments",
      icon: <FaCreditCard />,
    },    
    {
      id: 7,
      title: "Premium user",
      path: "/dashboard/premium-users",
      icon: <FaUsers />,
    },
    {
      id: 8,
      title: "Platform Updates",
      path: "/dashboard/platform-updates",
      icon: <FaSyncAlt />,
    },
    {
      id: 9,
      title: "Security Settings",
      path: "/dashboard/security-settings",
      icon: <FaShieldAlt />,
    }
  ];

  return (
    <div className="h-full bg-slate-100 pt-10 dark:bg-slate-900">
    <ul className="flex flex-col gap-3 p-3 text-black font-serif text-sm">
      {listItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            href={item.path}
            key={item.id}
            className={`flex items-center gap-1 p-1 rounded-md transition-all duration-200 ${
              isActive
                ? "bg-primary text-white transform scale-105"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            {item.icon}
            <span className="hidden sm:block">{item.title}</span>
          </Link>
        );
      })}
    </ul>
  </div>
  
  );
};

export default Sidebar;
