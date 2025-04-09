'use client';

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./ui/mode-toggle"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname();
  
  // Format the pathname to display it nicely
  const formatPathname = () => {
    if (pathname === "/") return "Home";
    
    // Remove leading slash
    const formattedPath = pathname.slice(1);
    
    // Get the last segment of the path and capitalize it
    const lastSegment = formattedPath.split("/").pop() || "";
    
    // Replace hyphens and underscores with spaces
    const cleanSegment = lastSegment.replace(/[-_]/g, " ");
    
    // Capitalize first letter of each word
    return cleanSegment
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{formatPathname()}</h1>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}