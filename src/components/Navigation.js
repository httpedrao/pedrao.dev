import { useEffect, useState } from "react";

import { NavigationLink } from "./NavigationLink";
import { Menu } from "./Wrapper";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const MENU_OPTIONS = [
    {
      label: "who is pedro?",
      path: "/",
    },
    {
      label: "words",
      path: "/words",
    },
    {
      label: "photos",
      path: "/photos",
    },
    {
      label: "hello",
      path: "/hello",
    }
  ];

  return (
    <Menu>
      {MENU_OPTIONS.map(({ label, path }) => (
        <NavigationLink key={path} href={path} active={router.asPath == path}>
          {label}
        </NavigationLink>
      ))}
    </Menu>
  );
}

export default Navigation;
