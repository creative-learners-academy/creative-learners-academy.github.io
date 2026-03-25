import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Creative Learners Academy</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.08] mb-6">
            Where Every Child{" "}
            <span className="italic gold-gradient-text">Finds Their Wings</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            I believe every child has a spark waiting to shine — they just need someone who truly cares. 
            With personalised attention in both online and offline classes, I focus on building not just 
            academic skills but real confidence, curiosity and character. 
            Let me help your child discover what they're truly capable of.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="#contact">
                Book a Free Demo <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#courses">View Courses</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
