import { motion } from "framer-motion";
import { GraduationCap, Target, Clock, Palette } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "M.A. English Literature", desc: "Strong academic foundation with deep expertise in language and literature" },
  { icon: Palette, title: "Passionate Artist", desc: "Certified in Phonics, Drawing & Folk Art — bringing creativity into every lesson" },
  { icon: Target, title: "Result Oriented", desc: "Focused approach ensuring consistent academic improvement and confidence" },
  { icon: Clock, title: "Flexible Timings", desc: "Convenient batch schedules designed for working parents" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="glow-orb w-[300px] h-[300px] bg-primary/5 top-[20%] right-[-100px]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="section-label mb-4">About</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Meet{" "}
            <span className="italic gold-gradient-text">Priya Tewary</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            An experienced and dedicated teacher with an M.A. in English Literature, 
            I bring a unique combination of academic depth and genuine warmth to every class. 
            Students don't just learn — they grow with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card shimmer-hover p-7 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_rgba(212,175,55,.15)] transition-all duration-300">
                <h.icon className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
