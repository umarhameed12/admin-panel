"use client";

import { type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
  role,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
    permissions: string[];
  }[];
  role: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items
            .filter((item) => item.permissions.includes(role))
            .map((item) => (
              <Link key={item.title} href={item.url}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className="cursor-pointer"
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
