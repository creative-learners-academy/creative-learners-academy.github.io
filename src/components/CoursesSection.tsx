import { motion } from "framer-motion";
import { MapPin, Clock, Wifi, ArrowRight, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const tuitionClasses = [
  { subject: "Class 4th & 5th", fee: "₹2,500", days: "Monday to Friday", timing: "1 Hour" },
  { subject: "Class 6th to 8th", fee: "₹3,500", days: "Monday to Saturday", timing: "1.5 to 2 Hours" },
];

const class10Subjects = [
  { subject: "Science", fee: "₹3,000", days: "Mon, Wed, Friday", timing: "1.5 Hours" },
  { subject: "Social Studies (SST)", fee: "₹2,500", days: "Tue, Wed, Saturday", timing: "1.5 Hours" },
  { subject: "English", fee: "₹1,500", days: "Saturday, Sunday", timing: "1.5 Hours" },
  { subject: "Hindi", fee: "₹1,500", days: "Saturday, Sunday", timing: "1.5 Hours" },
];

const specialClasses = [
  { subject: "Phonics", fee: "₹2,000", days: "Monday to Saturday", timing: "1 Hour" },
  { subject: "Drawing", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Folk Art", fee: "₹2,200", days: "Saturday, Sunday", timing: "1.5 Hours" },
  { subject: "Handwriting", fee: "₹1,500", days: "Saturday, Sunday", timing: "1.5 Hours" },
];

const offlineCourses = [
  { subject: "Mathematics", classes: "Class 6–10", timing: "Mon–Fri — 4:00 PM", location: "Sector 15, Noida" },
  { subject: "Science", classes: "Class 8–10", timing: "Mon, Wed, Fri — 6:00 PM", location: "Sector 15, Noida" },
  { subject: "Hindi", classes: "Class 4–8", timing: "Tue, Thu, Sat — 4:00 PM", location: "Sector 15, Noida" },
];

const CourseRow = ({ item }: { item: { subject: string; fee: string; days: string; timing: string } }) => (
  <div className="flex items-center justify-between p-3.5 rounded-xl bg-background/60 gap-3">
    <div className="min-w-0">
      <p className="font-medium text-foreground text-sm">{item.subject}</p>
      <div className="flex items-center gap-3 mt-1 text-xs text-foreground/70 font-medium flex-wrap">
        <span className="flex items-center gap-1"><Clock size={11} strokeWidth={2} />{item.days}</span>
        <span className="font-semibold">{item.timing}</span>
      </div>
    </div>
    <span className="text-sm font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-lg whitespace-nowrap">
      {item.fee}
    </span>
  </div>
);

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

              {/* Tuition Classes */}
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-base text-foreground">Tuition Classes</h4>
                <h4 className="font-serif text-base text-foreground">Tuition Fee</h4>
              </div>
              <div className="space-y-2.5 mb-6">
                {tuitionClasses.map((c) => <CourseRow key={c.subject} item={c} />)}
              </div>

              {/* 10th Subject-wise */}
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-base text-foreground">10th — Subject-wise</h4>
                <h4 className="font-serif text-base text-foreground">Tuition Fee</h4>
              </div>
              <div className="space-y-2.5 mb-6">
                {class10Subjects.map((c) => <CourseRow key={c.subject} item={c} />)}
              </div>

              {/* Special Classes */}
              <h4 className="font-serif text-base text-foreground mb-3">Special Classes</h4>
              <div className="space-y-2.5">
                {specialClasses.map((c) => <CourseRow key={c.subject} item={c} />)}
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