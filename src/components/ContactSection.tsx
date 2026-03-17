import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-3">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Book a Free Demo Class
            </h2>
            <p className="text-muted-foreground mb-8">
              Experience the teaching quality first-hand. Schedule a free trial class and see the difference personalized mentorship makes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="text-foreground font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">classes@guruji.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Sector 15, Noida, UP</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="section-label block mb-2">Parent's Name</label>
                  <input
                    type="text"
                    className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Student's Class</label>
                  <select className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>Select Class</option>
                    {[4, 5, 6, 7, 8, 9, 10].map((c) => (
                      <option key={c}>Class {c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="section-label block mb-2">Preferred Mode</label>
                  <div className="flex gap-3">
                    <label className="flex-1 glass-card p-3 text-center text-sm cursor-pointer hover:scale-100 has-[:checked]:ring-2 has-[:checked]:ring-primary/30">
                      <input type="radio" name="mode" value="online" className="sr-only" />
                      Online
                    </label>
                    <label className="flex-1 glass-card p-3 text-center text-sm cursor-pointer hover:scale-100 has-[:checked]:ring-2 has-[:checked]:ring-primary/30">
                      <input type="radio" name="mode" value="offline" className="sr-only" />
                      Offline
                    </label>
                  </div>
                </div>
                <Button variant="hero" className="w-full">
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
