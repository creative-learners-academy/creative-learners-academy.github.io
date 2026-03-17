import { motion } from "framer-motion";
import { GraduationCap, Heart, Target, Clock } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Qualified Educator", desc: "B.Ed certified with specialization in Science & Mathematics" },
  { icon: Heart, title: "Passionate Teaching", desc: "Every student gets personalized attention and care" },
  { icon: Target, title: "Result Oriented", desc: "Focused approach ensuring consistent academic improvement" },
  { icon: Clock, title: "Flexible Timings", desc: "Convenient batch schedules for working parents" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Dedicated to Nurturing Young Minds
          </h2>
          <p className="text-muted-foreground">
            With over 8 years of teaching experience, she brings a unique combination of 
            academic rigor and genuine warmth to every class. Students don't just learn — they thrive.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <h.icon className="text-primary" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
