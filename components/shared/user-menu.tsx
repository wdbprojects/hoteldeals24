"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/shared/user-avatar";
import Link from "next/link";
import { LayoutDashboard, LogOut, NotebookPen } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserDataProps {
  userData: any;
}

const UserMenu = ({ userData }: UserDataProps) => {
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.replace("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative rounded-full border"
          size="icon"
        >
          <UserAvatar className="h-8 w-8" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 space-y-1" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p>
              Logged in as {userData?.firstName} {userData?.lastName}
            </p>
            <div className="text-xs leading-none text-muted-foreground">
              {userData?.email}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="">
          <DropdownMenuItem className="cursor-pointer">
            <Link href={`/users/nataslut`} className="flex items-center gap-2">
              <UserAvatar
                className="h-5 w-5"
                avatarUrl={userData.avatar ? userData.avatar.url : null}
              />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href={`#`} className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href={`#`} className="flex items-center gap-2">
              <NotebookPen className="h-4 w-4" />
              <span>My Bookings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
