import { Allura } from "next/font/google";

const signature = Allura({
  subsets: ["latin"],
  weight: "400",
});

import "./globals.css";
import CardNav from "@/components/CardNav";

export const metadata = {
  title: "Siddhant Shitole | Software Engineer",
  description:
    "Software Engineer focused on backend systems and applied AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      label: "Home",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      links: [
        {
          label: "Go to Home",
          href: "/",
          ariaLabel: "Home",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#4E5A44",
      textColor: "#FFFFFF",
      links: [
        {
          label: "View Projects",
          href: "/projects",
          ariaLabel: "Projects",
        },
      ],
    },
    {
      label: "Labs",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      links: [
        {
          label: "View Experiments",
          href: "/experiments",
          ariaLabel: "Experiments",
        },
      ],
    },
    {
      label: "Blog",
      bgColor: "#4E5A44",
      textColor: "#FFFFFF",
      links: [
        {
          label: "Read Blog",
          href: "/blog",
          ariaLabel: "Blog",
        },
      ],
    },
    {
      label: "Resume",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      links: [
        {
          label: "View Resume",
          href: "/resume",
          ariaLabel: "Resume",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#4E5A44",
      textColor: "#FFFFFF",
      links: [
        {
          label: "Contact Me",
          href: "/contact",
          ariaLabel: "Contact",
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased flex flex-col">
        <a
  href="/"
  className={`
    ${signature.className}
    fixed top-6 left-8 z-[100]
    text-4xl md:text-5xl
    bg-gradient-to-r from-white via-gray to-green
    bg-clip-text text-transparent
    tracking-wide
    hover:from-green hover:to-white
    transition-all duration-300
  `}
>
  Siddhant
</a>



        <CardNav
  logo="/logo.svg"
  baseColor="#000000"
  menuColor="#FFFFFF"
  buttonBgColor="#77FE00"
  buttonTextColor="#000000"
  items={[
    {
      label: "Home",
      bgColor: "#111111",
      textColor: "#FFFFFF",
      links: [
        {
          label: "Go to Home",
          href: "/",
          ariaLabel: "Navigate to Home",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#77FE00",
      textColor: "#000000",
      links: [
        {
          label: "View Projects",
          href: "/projects",
          ariaLabel: "Navigate to Projects",
        },
      ],
    },
    {
      label: "Labs",
      bgColor: "#4E5A44",
      textColor: "#FFFFFF",
      links: [
        {
          label: "View Experiments",
          href: "/experiments",
          ariaLabel: "Navigate to Experiments",
        },
      ],
    },
    {
      label: "Blog",
      bgColor: "#9B9B9B",
      textColor: "#000000",
      links: [
        {
          label: "Read Blog",
          href: "/blog",
          ariaLabel: "Navigate to Blog",
        },
      ],
    },
    {
      label: "Resume",
      bgColor: "#222222",
      textColor: "#FFFFFF",
      links: [
        {
          label: "View Resume",
          href: "/resume",
          ariaLabel: "Navigate to Resume",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#000000",
      textColor: "#77FE00",
      links: [
        {
          label: "Get in Touch",
          href: "/contact",
          ariaLabel: "Navigate to Contact",
        },
      ],
    },
  ]}
/>


        <main className="flex-grow pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} Siddhant Shitole</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
