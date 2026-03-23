import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-serif text-2xl text-foreground italic">
          Creative Learners
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="h-9 px-6 text-sm rounded-full" asChild>
            <a href="#contact">Book a Free Demo</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-muted-foreground hover:text-foreground py-1.5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full h-9 text-sm rounded-full" asChild>
            <a href="#contact">Book a Free Demo</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
