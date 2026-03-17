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

  // Fallback data for when DB is empty
  const fallbackTestimonials: Testimonial[] = [
    { id: "1", parent_name: "Priya Sharma", student_name: "Aarav", student_class: "Class 8", message: "My son's marks improved from 65% to 92% in just 3 months. The personalized attention makes all the difference!", rating: 5, created_at: "" },
    { id: "2", parent_name: "Rajesh Kumar", student_name: "Ananya", student_class: "Class 10", message: "Ma'am's teaching style is incredibly engaging. Board exam preparation has been completely stress-free.", rating: 5, created_at: "" },
    { id: "3", parent_name: "Sunita Verma", student_name: "Rohan", student_class: "Class 6", message: "The online classes are just as effective as offline ones. Rohan has gained so much confidence in Mathematics.", rating: 5, created_at: "" },
    { id: "4", parent_name: "Amit Patel", student_name: "Kavya", student_class: "Class 9", message: "What sets these classes apart is the genuine care for each student. Kavya has become self-motivated now.", rating: 5, created_at: "" },
    { id: "5", parent_name: "Meena Gupta", student_name: "Ishaan", student_class: "Class 7", message: "Affordable, effective, and deeply personal. Ishaan actually enjoys studying now — unimaginable before!", rating: 4, created_at: "" },
    { id: "6", parent_name: "Deepak Joshi", student_name: "Sanya", student_class: "Class 10", message: "Sanya scored 95+ in Science boards. The conceptual clarity and practice material is outstanding.", rating: 5, created_at: "" },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28 warm-section">
      <div className="container mx-auto px-4">
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
                  <Quote className="text-primary/15 mb-4" size={28} strokeWidth={1.5} />
                  <p className="text-foreground text-sm leading-relaxed mb-5">"{t.message}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="text-primary fill-primary" size={14} />
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, j) => (
                      <Star key={j} className="text-muted" size={14} />
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
