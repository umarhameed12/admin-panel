"use client";

import * as React from "react";
import { type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavSecondary({
  items,
  role,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: Icon;
    permissions: string[];
  }[];
  role: string;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
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
