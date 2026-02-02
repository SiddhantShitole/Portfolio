import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Labs", href: "/labs" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Siddhant
        </Link>

        <div className="flex gap-6 text-sm text-white/80">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
