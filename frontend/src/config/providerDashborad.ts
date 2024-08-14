import type { UserConfig } from "@/app/types/user";
import {
  HomeIcon,
  BriefcaseIcon,
  LayoutDashboardIcon,
  FolderIcon,
} from "./dashboardIcons";

export const userConfig: UserConfig = {
  userSidebarNav: [
    {
      title: "Home",
      href: "/",
      icon: { HomeIcon },
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: { LayoutDashboardIcon },
    },
    {
      title: "AI Applications",
      href: "/ai/applications",
      icon: { BriefcaseIcon },
    },
    {
      title: "Application Binaries",
      href: "/binaries",
      icon: { FolderIcon },
    },
  ],
  adminSidebarNav: [
    {
      title: "Organization",
      href: "/dashboard/user/visa",
      icon: "home",
    },
  ],
  sidebarNav: [],
  sidebarNavBidder: [],
};
