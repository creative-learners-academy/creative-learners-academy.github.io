import { motion } from "framer-motion";
import { GraduationCap, Heart, Target, Clock, Award, Palette, PenTool } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "M.A. English Literature", desc: "Strong academic foundation with deep expertise in language and literature" },
  { icon: Heart, title: "Passionate Teaching", desc: "Every student gets personalized attention and genuine care like family" },
  { icon: Target, title: "Result Oriented", desc: "Focused approach ensuring consistent academic improvement and confidence" },
  { icon: Clock, title: "Flexible Timings", desc: "Convenient batch schedules designed for working parents" },
];

const certifications = [
  { icon: Award, label: "Experienced & Dedicated Teacher" },
  { icon: Palette, label: "Certified Phonics, Drawing & Folk Art Teacher" },
  { icon: PenTool, label: "Specialist in Handwriting Improvement" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
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
            <span className="italic gold-gradient-text">Priya T.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            An experienced and dedicated teacher with an M.A. in English Literature, 
            Priya brings a unique combination of academic depth and genuine warmth to every class. 
            Students don't just learn — they grow with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/12 transition-colors">
                <h.icon className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card-static p-6 rounded-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {certifications.map((c) => (
              <div key={c.label} className="flex items-center gap-2.5">
                <c.icon className="text-primary shrink-0" size={18} strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;