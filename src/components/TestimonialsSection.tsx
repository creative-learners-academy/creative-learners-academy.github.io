import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  parent_name: string;
  student_name: string;
  student_class: string;
  message: string;
  rating: number;
  created_at: string;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setTestimonials(data as Testimonial[]);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const displayTestimonials = testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28 warm-section relative">
      <div className="glow-orb w-[350px] h-[350px] bg-primary/5 bottom-[10%] right-[-100px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="section-label mb-4">Wall of Love</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            What Parents{" "}
            <span className="italic gold-gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground">
            Real feedback from real parents. Their trust is our greatest achievement.
          </p>
        </motion.div>

        {loading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="break-inside-avoid glass-card-static p-6 rounded-2xl animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : displayTestimonials.length === 0 ? (
          <div className="text-center py-16">
            <Quote className="text-primary/20 mx-auto mb-4" size={48} strokeWidth={1} />
            <p className="text-muted-foreground text-lg">No reviews yet — be the first parent to share your experience!</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {displayTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="break-inside-avoid"
              >
                <div className="glass-card p-7 rounded-2xl">
                  <Quote className="text-primary/20 mb-4" size={28} strokeWidth={1.5} />
                  <p className="text-foreground/90 text-sm leading-relaxed mb-5">"{t.message}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="text-primary fill-primary" size={14} />
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, j) => (
                      <Star key={`e${j}`} className="text-muted" size={14} />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.parent_name}</p>
                    <p className="text-xs text-muted-foreground">Parent of {t.student_name} ({t.student_class})</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
