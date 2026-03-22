import React from "react";
import NavLink from "./NavLink";
type NavLink = { title: string; path: string };
type Props = { links: NavLink[] };

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink key={index} href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
