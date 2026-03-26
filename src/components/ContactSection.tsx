import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const courseOptions = [
  { group: "Tuition Classes", items: ["Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10 – Science", "Class 10 – Social Studies (SST)", "Class 10 – English", "Class 10 – Hindi"] },
  { group: "Special Classes", items: ["Phonics", "Drawing", "Folk Art"] },
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !course || !mode) {
      toast.error("Please fill all fields before submitting.");
      return;
    }

    const message = `Hello Priya Ma'am,%0A%0AI'd like to book a *Free Demo Class*.%0A%0A*Parent's Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Course:* ${encodeURIComponent(course)}%0A*Mode:* ${encodeURIComponent(mode)}%0A%0APlease share the details. Thank you!`;

    const whatsappUrl = `https://wa.me/919102419492?text=${message}`;
    window.open(whatsappUrl, "_blank");

    // Also prepare mailto
    const subject = encodeURIComponent(`Demo Class Booking – ${course}`);
    const emailBody = encodeURIComponent(`Hello Priya Ma'am,\n\nI'd like to book a Free Demo Class.\n\nParent's Name: ${name}\nPhone: ${phone}\nCourse: ${course}\nMode: ${mode}\n\nPlease share the details. Thank you!`);
    const mailtoUrl = `mailto:priyatewary2015@gmail.com?subject=${subject}&body=${emailBody}`;

    // Open email after a short delay
    setTimeout(() => {
      window.open(mailtoUrl, "_blank");
    }, 1000);

    toast.success("Redirecting to WhatsApp & Email...");
  };

  const inputClass = "w-full h-12 rounded-xl bg-background/50 border border-border/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all";

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="glow-orb w-[400px] h-[400px] bg-primary/5 top-[30%] left-[-150px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
              Book a Free{" "}
              <span className="italic gold-gradient-text">Demo Class</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Experience the teaching quality first-hand. Schedule a free trial class and see the difference personalized mentorship makes.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Call us", value: "+91 9102419492", href: "tel:+919102419492" },
                { icon: Mail, label: "Email", value: "priyatewary2015@gmail.com", href: "mailto:priyatewary2015@gmail.com" },
                { icon: MapPin, label: "Location", value: "Sonari, Jamshedpur", href: undefined },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_15px_rgba(212,175,55,.12)] transition-all duration-300">
                    <item.icon className="text-primary" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card-static p-8 rounded-3xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="section-label block mb-2.5">Parent's Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="section-label block mb-2.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="section-label block mb-2.5">Course / Class</label>
                  <select
                    className={inputClass}
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    <option value="">Select Course</option>
                    {courseOptions.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.items.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="section-label block mb-2.5">Preferred Mode</label>
                  <div className="flex gap-3">
                    <label className={`flex-1 glass-card-static p-3.5 text-center text-sm cursor-pointer rounded-xl transition-all hover:border-primary/20 ${mode === "Online" ? "ring-2 ring-primary/40 bg-primary/5" : ""}`}>
                      <input type="radio" name="mode" value="Online" className="sr-only" checked={mode === "Online"} onChange={() => setMode("Online")} />
                      🖥️ Online
                    </label>
                    <label className={`flex-1 glass-card-static p-3.5 text-center text-sm cursor-pointer rounded-xl transition-all hover:border-primary/20 ${mode === "Offline" ? "ring-2 ring-primary/40 bg-primary/5" : ""}`}>
                      <input type="radio" name="mode" value="Offline" className="sr-only" checked={mode === "Offline"} onChange={() => setMode("Offline")} />
                      🏫 Offline
                    </label>
                  </div>
                </div>
                <Button variant="gold" className="w-full" type="submit">
                  <Send size={18} className="mr-1" /> Book a Free Demo
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Sends your details via WhatsApp & Email directly to Priya Ma'am
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
