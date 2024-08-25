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
import { LogOut } from "lucide-react";

const UserMenu = () => {
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
            <p>Logged in as nataslut</p>
            <div className="text-xs leading-none text-muted-foreground">
              nata@slutty.com
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="">
          <DropdownMenuItem className="cursor-pointer">
            <Link href={`/users/nataslut`} className="flex items-center gap-2">
              <UserAvatar className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2"
            onClick={() => {
              console.log("Log out");
            }}
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
