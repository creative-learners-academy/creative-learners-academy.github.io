import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
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
                { icon: Phone, label: "Call us", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "classes@guruji.com" },
                { icon: MapPin, label: "Location", value: "Sector 15, Noida, UP" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
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
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="section-label block mb-2.5">Parent's Name</label>
                  <input
                    type="text"
                    className="w-full h-12 rounded-xl bg-background border-0 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className="w-full h-12 rounded-xl bg-background border-0 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2.5">Student's Class</label>
                  <select className="w-full h-12 rounded-xl bg-background border-0 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow">
                    <option>Select Class</option>
                    {[4, 5, 6, 7, 8, 9, 10].map((c) => (
                      <option key={c}>Class {c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="section-label block mb-2.5">Preferred Mode</label>
                  <div className="flex gap-3">
                    <label className="flex-1 glass-card-static p-3.5 text-center text-sm cursor-pointer rounded-xl has-[:checked]:ring-2 has-[:checked]:ring-primary/30 has-[:checked]:bg-primary/5 transition-all hover:bg-background">
                      <input type="radio" name="mode" value="online" className="sr-only" />
                      🖥️ Online
                    </label>
                    <label className="flex-1 glass-card-static p-3.5 text-center text-sm cursor-pointer rounded-xl has-[:checked]:ring-2 has-[:checked]:ring-primary/30 has-[:checked]:bg-primary/5 transition-all hover:bg-background">
                      <input type="radio" name="mode" value="offline" className="sr-only" />
                      🏫 Offline
                    </label>
                  </div>
                </div>
                <Button variant="gold" className="w-full">
                  <MessageCircle size={18} className="mr-1" /> Book a Free Demo
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
