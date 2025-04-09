"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
      permissions: ["Admin", "Manager", "User"],
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: IconUsers,
      permissions: ["Admin", "Manager"],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
      permissions: ["Admin", "Manager", "User"],
    },
    {
      title: "Get Help",
      url: "/dashboard/help",
      icon: IconHelp,
      permissions: ["Admin", "Manager", "User"],
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
      permissions: ["Admin", "Manager", "User"],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userRole = useSelector((state: RootState) => state.auth);
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Uptechsol</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} role={userRole.role} />
        <NavSecondary
          items={data.navSecondary}
          className="mt-auto"
          role={userRole.role}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser email={userRole.email} />
      </SidebarFooter>
    </Sidebar>
  );
}
