import Link from "next/link";
import SearchField from "@/components/forms/search-field";
import DarkMode from "@/components/shared/dark-mode";
import UserMenu from "@/components/shared/user-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-muted dark:bg-muted/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-8 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          Hotel Deals
        </Link>
        <SearchField />
        <div className="flex items-center gap-4">
          <DarkMode />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
