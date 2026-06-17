import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <Container className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-slate-100">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-bold">F2</span>
          DriveTest
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-slate-100 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" href="https://pkfokam48.github.io/Drivetest-Telecom-Dashboard/">Try It Now</Button>
        </div>

        <button className="md:hidden text-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden glass border-t border-slate-700/30 px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-slate-100">
              {l.label}
            </a>
          ))}
          <Button size="sm" href="https://pkfokam48.github.io/Drivetest-Telecom-Dashboard/" className="mt-2 w-full">Try It Now</Button>
        </div>
      )}
    </header>
  );
}
