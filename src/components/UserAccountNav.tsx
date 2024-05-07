"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { User } from "next-auth";
import { UserAvatar } from "./UserAvatar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import Link from "next/link";
import {
  LogOutIcon,
  PlusIcon,
  SettingsIcon,
  TrendingUpIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";

interface UserAccountNavProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div className="flex justify-between">
            <Link href="/">Feed</Link>
            <TrendingUpIcon className="w-4 h-4" />
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <div className="flex justify-between">
            <Link href="/r/create"> Create Community</Link>
            <PlusIcon className="w-4 h-4" />
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <div className="flex justify-between">
            <Link href="/settings">Settings</Link>
            <SettingsIcon className="w-4 h-4" />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
        >
          <div className="flex justify-between">
            Sign Out
            <LogOutIcon className="w-4 h-4" />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
