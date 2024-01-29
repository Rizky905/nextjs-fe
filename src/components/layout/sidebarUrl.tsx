import { Icon } from "@iconify/react";

type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dasboard",
    path: "/dashboard",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "User",
    path: "/user",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/user" },
      // { title: 'User', path: '/projects/web-design' },
      // { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
  },
];
