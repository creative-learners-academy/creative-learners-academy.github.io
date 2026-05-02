import { motion } from "framer-motion";
import { MapPin, Clock, Wifi, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tuitionClasses = [
  { subject: "Class 4th & 5th", fee: "₹2,500", days: "Monday to Friday", timing: "1 Hour" },
  { subject: "Class 6th to 8th", fee: "₹3,500", days: "Monday to Friday", timing: "1.5 Hours" },
];

const class10Subjects = [
  { subject: "Science", fee: "₹3,000", days: "Mon, Wed, Friday", timing: "1 Hour" },
  { subject: "Social Studies (SST)", fee: "₹2,500", days: "Tue, Wed, Saturday", timing: "1 Hour" },
  { subject: "English", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Hindi", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
];

const specialClasses = [
  { subject: "Phonics", fee: "₹2,500", days: "Monday to Saturday", timing: "1 Hour" },
  { subject: "Drawing", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Folk Art", fee: "₹2,500", days: "Saturday, Sunday", timing: "1.5 Hours" },
  { subject: "Handwriting", fee: "₹1,500", days: "Saturday, Sunday", timing: "1.5 Hours" },
  { subject: "English Grammar", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Basic Spoken English", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Basic Hindi", fee: "₹1,500", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Basic Maths", fee: "₹1,500", days: "Saturday, Sunday", timing: "45 mins" },
];

const offlineCourses = [
  { subject: "Handwriting", fee: "₹1,500", days: "Saturday, Sunday", timing: "1.5 Hours" },
  { subject: "Drawing", fee: "₹1,200", days: "Saturday, Sunday", timing: "1 Hour" },
  { subject: "Folk Art", fee: "₹1,800", days: "Saturday, Sunday", timing: "1.5 Hours" },
];

const CourseRow = ({ item }: { item: { subject: string; fee: string; days: string; timing: string } }) => (
  <div className="flex items-center justify-between p-3.5 rounded-xl bg-background/40 border border-border/30 gap-3 hover:border-primary/20 transition-colors duration-300">
    <div className="min-w-0">
      <p className="font-medium text-foreground text-sm">{item.subject}</p>
      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground font-medium flex-wrap">
        <span className="flex items-center gap-1"><Clock size={11} strokeWidth={2} />{item.days}</span>
        <span className="font-semibold text-foreground/70">{item.timing}</span>
      </div>
    </div>
    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg whitespace-nowrap border border-primary/15">
      {item.fee}
    </span>
  </div>
);

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 md:py-28 warm-section relative">
      <div className="glow-orb w-[400px] h-[400px] bg-primary/5 top-[10%] left-[-150px]" />
      
      <div className="container mx-auto px-4 relative">
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

        {/* Online Classes - Full Width 2-Column */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card-static p-7 rounded-3xl mb-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,.1)]">
                <Wifi className="text-primary" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">Online Classes</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary pulse-live" />
                  <span className="text-[10px] text-primary font-semibold uppercase tracking-[0.2em]">Live Sessions</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif text-base text-foreground">Tuition Classes</h4>
                  <h4 className="font-serif text-sm text-primary">Tuition Fee</h4>
                </div>
                <div className="space-y-2.5 mb-6">
                  {tuitionClasses.map((c) => <CourseRow key={c.subject} item={c} />)}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif text-base text-foreground">10th — Subject-wise</h4>
                  <h4 className="font-serif text-sm text-primary">Tuition Fee</h4>
                </div>
                <div className="space-y-2.5">
                  {class10Subjects.map((c) => <CourseRow key={c.subject} item={c} />)}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif text-base text-foreground">Special Classes</h4>
                  <h4 className="font-serif text-sm text-primary">Tuition Fee</h4>
                </div>
                <div className="space-y-2.5">
                  {specialClasses.map((c) => <CourseRow key={c.subject} item={c} />)}
                </div>
              </div>
            </div>

            <Button variant="gold" className="w-full mt-7" asChild>
              <a href="#contact">Join Online Batch <ArrowRight size={16} /></a>
            </Button>
          </div>
        </motion.div>

        {/* Offline Classes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="glass-card-static p-7 rounded-3xl max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <MapPin className="text-foreground" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">Offline Classes</h3>
                <p className="text-xs text-muted-foreground">In-person batch coaching</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-base text-foreground">Tuition Classes</h4>
              <h4 className="font-serif text-sm text-primary">Tuition Fee</h4>
            </div>
            <div className="space-y-2.5">
              {offlineCourses.map((c) => <CourseRow key={c.subject} item={c} />)}
            </div>
            <Button variant="heroOutline" className="w-full mt-7" asChild>
              <a href="#contact">Check Availability</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
