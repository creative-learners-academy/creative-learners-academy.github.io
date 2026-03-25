import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,.3)]"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-18 px-4 py-4">
        <a href="#" className="font-serif text-2xl text-foreground italic">
          Creative<span className="gold-gradient-text"> Learners</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="h-10 px-6 text-sm rounded-full" asChild>
            <a href="#contact">Book a Free Demo</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl px-4 pb-5 space-y-3 border-b border-border/50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-muted-foreground hover:text-primary py-2 uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full h-10 text-sm rounded-full" asChild>
            <a href="#contact">Book a Free Demo</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
