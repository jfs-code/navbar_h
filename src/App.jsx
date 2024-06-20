import React from "react";
import { Navbar } from "./components/Navbar";

const links = [
  { text: "Home", href: "#" },
  { text: "About", href: "#" },
  { text: "Skills", href: "#" },
  { text: "Portfolio", href: "#" },
  { text: "Contact", href: "#" }
];

export function App() {
  return (
    <div>
      <Navbar brand="Menu" links={links} />
    </div>
  )
}
