import React from "react";
import { navs } from "@/data/data";
import "./nav.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav id="navbar">
      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
