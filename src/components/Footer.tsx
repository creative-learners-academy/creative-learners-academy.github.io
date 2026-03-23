import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-xl text-foreground italic">Creative Learners</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Made with <Heart size={12} className="text-rose fill-rose" /> for every student
          </p>
        </div>
        <div className="divider-ornament mt-6 mb-4">
          <span className="text-xs text-muted-foreground/50">✦</span>
        </div>
        <p className="text-center text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} Guruji Classes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
