import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, BookOpen } from "lucide-react";
import heroImg from "@/assets/hero-teaching.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: Star, value: "98%", label: "Improvement Rate" },
  { icon: BookOpen, value: "8+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="section-label mb-4">Personalized Mentorship</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Mastering Every Subject{" "}
              <span className="italic text-primary">Through Care</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Offline batches for local students and live online sessions for learners everywhere. 
              Dedicated attention, proven results.
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
            <div className="flex gap-8 mt-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className="mx-auto mb-1 text-primary" size={20} strokeWidth={1.5} />
                  <p className="text-2xl font-serif text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              <img
                src={heroImg}
                alt="Teacher in classroom"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent pulse-live" />
              <span className="text-sm font-medium text-foreground">Online classes available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
