import GlobalSearch from "@/components/ui/GlobalSearch";
import Image from "next/image";
import Link from "next/link";
import ProtectedNavItems from "./ProtectedNavItems";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  return (
    <nav className="bg-white font-serif py-1 z-50 sticky top-0 shadow-sm">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <aside className="flex items-center justify-start gap-x-2">
          <Link href={"/"} className="flex items-center ">
            <Image
              src={"/images/logo.png"}
              width={56}
              height={56}
              alt="Travel-Vista logo"
            />
            <h2 className="uppercase text-xl hidden sm:block">
              Travel Vista
            </h2>
          </Link>
          <GlobalSearch />
        </aside>
        <aside className="hidden md:block">
          <ul className="md:flex items-center gap-x-4">
            <ProtectedNavItems />
          </ul>
        </aside>
        <aside className="md:hidden">
          <ResponsiveNav />
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
