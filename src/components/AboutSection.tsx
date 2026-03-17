import { motion } from "framer-motion";
import { GraduationCap, Heart, Target, Clock } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Qualified Educator", desc: "B.Ed certified with specialization in Science & Mathematics" },
  { icon: Heart, title: "Passionate Teaching", desc: "Every student gets personalized attention and genuine care" },
  { icon: Target, title: "Result Oriented", desc: "Focused approach ensuring consistent academic improvement" },
  { icon: Clock, title: "Flexible Timings", desc: "Convenient batch schedules for working parents" },
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
            Dedicated to Nurturing{" "}
            <span className="italic gold-gradient-text">Young Minds</span>
          </h2>
          <p className="text-muted-foreground text-base">
            With over 8 years of teaching experience, she brings a unique combination of 
            academic rigor and genuine warmth to every class. Students don't just learn — they thrive.
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
      </div>
    </section>
  );
};

export default AboutSection;
