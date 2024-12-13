import { imgPath } from "@/components/helpers/functions-general";
import {
  Clapperboard,
  Component,
  LayoutDashboard,
  Megaphone,
  MegaphoneIcon,
  Shirt,
  Star,
  Utensils,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: "Banner",
      slug: "/admin/banner",
      icon: <MegaphoneIcon size={16} />,
    },
    {
      title: "Clothes",
      slug: "/admin/clothes",
      icon: <Shirt size={16} />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <Component size={16} />,
    },
  ];

  return (
    <>
      <aside className="p-4 border-r border-line">
        <h3>ZENEROBE</h3>

        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent opacity-100 text-white"
                    : ""
                } p-2 mb-2 border border-transparent rounded-md opacity-60 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex gap-3  items-center"
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
