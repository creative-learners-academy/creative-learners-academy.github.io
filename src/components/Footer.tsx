import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-foreground">Guruji Classes</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Made with <Heart size={12} className="text-destructive fill-destructive" /> for every student
        </p>
      </div>
    </footer>
  );
};

export default Footer;
