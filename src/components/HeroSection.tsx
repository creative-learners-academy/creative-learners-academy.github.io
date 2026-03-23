import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, BookOpen, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-teaching.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: Star, value: "98%", label: "Improvement Rate" },
  { icon: BookOpen, value: "8+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">Creative Learners Academy</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.08] mb-6">
              Where Every Child{" "}
              <span className="italic gold-gradient-text">Finds Their Wings</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Har bachche mein ek chamakta sitara hota hai — bas zaroorat hoti hai sahi guidance ki. 
              Online ho ya offline, <strong>Priya Tewary Ma'am</strong> ka pyaar aur mehnat har student ko confident banata hai. 
              Aapke bachche ka behtar kal, <strong>Creative Learners Academy</strong> se shuru hota hai.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <a href="#contact">
                  Book a Free Demo <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="#courses">View Courses</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-serif text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elevated)' }}>
              <img
                src={heroImg}
                alt="Creative Learners Academy - Priya Tewary"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            </div>
            
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 glass-card-static px-5 py-3 flex items-center gap-2.5 rounded-2xl"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary pulse-live" />
              <span className="text-sm font-medium text-foreground">Admission Open 2026-27</span>
            </motion.div>

            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
