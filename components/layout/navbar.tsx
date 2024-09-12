"use client";
import Link from "next/link";
import DarkMode from "@/components/shared/dark-mode";
import UserMenu from "@/components/shared/user-menu";
import PopoverSearchForm from "../forms/popover-search-form";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";

const Navbar = () => {
  const { data } = useSession();

  return (
    <header className="sticky top-0 z-10 bg-muted dark:bg-muted">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-8 py-3">
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-primary">
            Hotel Deals
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <PopoverSearchForm />
        </div>
        <div className="flex-1 flex items-center justify-end gap-4">
          <DarkMode />
          {data?.user ? (
            <UserMenu userData={data?.user} />
          ) : (
            <>
              {data === undefined && (
                <Skeleton className="h-8 w-8 rounded-full bg-secondary-foreground/10" />
              )}
              {data === null && (
                <Button asChild variant="link" size="default">
                  <Link href="/login" className="font-semibold">
                    Login
                  </Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
