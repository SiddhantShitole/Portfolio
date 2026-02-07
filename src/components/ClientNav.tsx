"use client";

import CardNav from "./CardNav";

export default function ClientNav() {
  const navItems = [
    {
      label: "Projects",
      bgColor: "#111",
      textColor: "#fff",
      links: [
        { label: "View Projects", href: "/projects", ariaLabel: "Projects" },
      ],
    },
    {
      label: "Experiments",
      bgColor: "#0f1a0f",
      textColor: "#77FE00",
      links: [
        { label: "Open Labs", href: "/experiments", ariaLabel: "Experiments" },
      ],
    },
    {
      label: "Blog",
      bgColor: "#151515",
      textColor: "#fff",
      links: [
        { label: "Read Blog", href: "/blog", ariaLabel: "Blog" },
      ],
    },
    {
      label: "Resume",
      bgColor: "#101010",
      textColor: "#77FE00",
      links: [
        { label: "View Resume", href: "/resume", ariaLabel: "Resume" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#0f1a0f",
      textColor: "#77FE00",
      links: [
        { label: "Get in Touch", href: "/contact", ariaLabel: "Contact" },
      ],
    },
  ];

  return (
    <CardNav
      logo="/logo.svg"
      items={navItems}
      baseColor="#000"
      menuColor="#fff"
      buttonBgColor="#77FE00"
      buttonTextColor="#000"
    />
  );
}
