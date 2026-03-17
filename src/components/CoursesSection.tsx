import { motion } from "framer-motion";
import { MapPin, Clock, Wifi, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const onlineCourses = [
  { subject: "Mathematics", classes: "Class 6–10", timing: "Mon, Wed, Fri — 5:00 PM", spots: "4 spots left" },
  { subject: "Science", classes: "Class 6–10", timing: "Tue, Thu — 5:00 PM", spots: "6 spots left" },
  { subject: "English", classes: "Class 4–8", timing: "Sat — 10:00 AM", spots: "8 spots left" },
];

const offlineCourses = [
  { subject: "Mathematics", classes: "Class 6–10", timing: "Mon–Fri — 4:00 PM", location: "Sector 15, Noida" },
  { subject: "Science", classes: "Class 8–10", timing: "Mon, Wed, Fri — 6:00 PM", location: "Sector 15, Noida" },
  { subject: "Hindi", classes: "Class 4–8", timing: "Tue, Thu, Sat — 4:00 PM", location: "Sector 15, Noida" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 md:py-28 warm-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="section-label mb-4">Courses</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Learn Your Way —{" "}
            <span className="italic gold-gradient-text">Online or Offline</span>
          </h2>
          <p className="text-muted-foreground">
            Choose from live interactive online sessions or in-person batch classes. Same quality, your convenience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Online */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="online-glow rounded-3xl p-1"
          >
            <div className="glass-card-static p-7 h-full rounded-3xl">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wifi className="text-primary" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Online Classes</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-live" />
                    <span className="text-[10px] text-primary font-semibold uppercase tracking-[0.2em]">Live Sessions</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {onlineCourses.map((c) => (
                  <div key={c.subject} className="flex items-start justify-between p-4 rounded-xl bg-background/60">
                    <div>
                      <p className="font-medium text-foreground">{c.subject}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.classes}</p>
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                        <Clock size={12} strokeWidth={1.5} /> {c.timing}
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-lg whitespace-nowrap">
                      {c.spots}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="gold" className="w-full mt-7" asChild>
                <a href="#contact">Join Online Batch <ArrowRight size={16} /></a>
              </Button>
            </div>
          </motion.div>

          {/* Offline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card-static p-7 h-full rounded-3xl">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <MapPin className="text-foreground" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Offline Classes</h3>
                  <p className="text-xs text-muted-foreground">In-person batch coaching</p>
                </div>
              </div>
              <div className="space-y-3">
                {offlineCourses.map((c) => (
                  <div key={c.subject} className="flex items-start justify-between p-4 rounded-xl bg-background/60">
                    <div>
                      <p className="font-medium text-foreground">{c.subject}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.classes}</p>
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                        <Clock size={12} strokeWidth={1.5} /> {c.timing}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                      <MapPin size={12} strokeWidth={1.5} /> {c.location}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="heroOutline" className="w-full mt-7" asChild>
                <a href="#contact">Check Availability</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
