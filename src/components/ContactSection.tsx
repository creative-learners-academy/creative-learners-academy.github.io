import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
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
                { icon: Phone, label: "Call us", value: "+91 9102419492" },
                { icon: Mail, label: "Email", value: "priyatewary2015@gmail.com" },
                { icon: MapPin, label: "Location", value: "Sonari, Jamshedpur" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_15px_rgba(212,175,55,.12)] transition-all duration-300">
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
                    className="w-full h-12 rounded-xl bg-background/50 border border-border/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className="w-full h-12 rounded-xl bg-background/50 border border-border/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2.5">Student's Class</label>
                  <select className="w-full h-12 rounded-xl bg-background/50 border border-border/50 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all">
                    <option>Select Class</option>
                    {[4, 5, 6, 7, 8, 9, 10].map((c) => (
                      <option key={c}>Class {c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="section-label block mb-2.5">Preferred Mode</label>
                  <div className="flex gap-3">
                    <label className="flex-1 glass-card-static p-3.5 text-center text-sm cursor-pointer rounded-xl has-[:checked]:ring-2 has-[:checked]:ring-primary/40 has-[:checked]:bg-primary/5 transition-all hover:border-primary/20">
                      <input type="radio" name="mode" value="online" className="sr-only" />
                      🖥️ Online
                    </label>
                    <label className="flex-1 glass-card-static p-3.5 text-center text-sm cursor-pointer rounded-xl has-[:checked]:ring-2 has-[:checked]:ring-primary/40 has-[:checked]:bg-primary/5 transition-all hover:border-primary/20">
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
