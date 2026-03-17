import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Placeholder testimonials — will be dynamic later
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    relation: "Parent of Aarav (Class 8)",
    text: "My son's marks improved from 65% to 92% in just 3 months. The personalized attention makes all the difference. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    relation: "Parent of Ananya (Class 10)",
    text: "Ma'am's teaching style is incredibly engaging. Ananya looks forward to every class. Board exam preparation has been stress-free.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sunita Verma",
    relation: "Parent of Rohan (Class 6)",
    text: "The online classes are just as effective as offline ones. Rohan has gained so much confidence in Mathematics. Thank you!",
    rating: 5,
  },
  {
    id: 4,
    name: "Amit Patel",
    relation: "Parent of Kavya (Class 9)",
    text: "What sets these classes apart is the genuine care for each student's progress. Kavya has become self-motivated now.",
    rating: 5,
  },
  {
    id: 5,
    name: "Meena Gupta",
    relation: "Parent of Ishaan (Class 7)",
    text: "Affordable, effective, and deeply personal. Ishaan actually enjoys studying now which was unimaginable before.",
    rating: 4,
  },
  {
    id: 6,
    name: "Deepak Joshi",
    relation: "Parent of Sanya (Class 10)",
    text: "Sanya scored 95+ in Science boards. The conceptual clarity and practice material provided is outstanding.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="section-label mb-3">Wall of Love</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground">
            Real feedback from real parents. Their trust is our greatest achievement.
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid"
            >
              <div className="glass-card p-6">
                <Quote className="text-primary/20 mb-3" size={24} strokeWidth={1.5} />
                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-accent fill-accent" size={14} />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
