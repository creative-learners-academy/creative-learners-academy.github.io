import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 hero-gradient overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 top-[-100px] left-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-primary/5 bottom-[-50px] right-[-50px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary tracking-[0.15em] uppercase">Creative Learners Academy</span>
          </motion.div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-8">
            Where Every Child{" "}
            <span className="italic gold-gradient-text">Finds Their Wings</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            I believe every child has a spark waiting to shine — they just need someone who truly cares. 
            With personalised attention in both online and offline classes, I focus on building not just 
            academic skills but real confidence, curiosity and character. 
            Let me help your child discover what they're truly capable of.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button variant="hero" asChild>
              <a href="#contact">
                Book a Free Demo <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#courses">View Courses</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
