import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SubmitReview = () => {
  const [form, setForm] = useState({
    parent_name: "",
    student_name: "",
    student_class: "",
    message: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parent_name.trim() || !form.message.trim() || !form.student_name.trim()) return;

    setSubmitting(true);
    const { error } = await supabase.from("testimonials").insert({
      parent_name: form.parent_name.trim(),
      student_name: form.student_name.trim(),
      student_class: form.student_class,
      message: form.message.trim(),
      rating: form.rating,
      approved: false,
    });

    setSubmitting(false);
    if (!error) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card-static p-10 rounded-3xl text-center max-w-md"
        >
          <CheckCircle className="text-primary mx-auto mb-4" size={48} strokeWidth={1.5} />
          <h2 className="font-serif text-2xl text-foreground mb-3">Thank You! 🙏</h2>
          <p className="text-muted-foreground text-sm">
            Your review has been submitted successfully. It will appear on our website once approved by the teacher. Thank you for your valuable feedback!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <p className="font-serif text-2xl text-foreground italic mb-1">Creative <span className="gold-gradient-text">Learners</span></p>
          <p className="section-label">Share Your Experience</p>
        </div>

        <div className="glass-card-static p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="section-label block mb-2.5">Your Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.parent_name}
                onChange={(e) => setForm({ ...form, parent_name: e.target.value })}
                className="w-full h-12 rounded-xl bg-background border-0 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                placeholder="Parent's name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="section-label block mb-2.5">Student's Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.student_name}
                  onChange={(e) => setForm({ ...form, student_name: e.target.value })}
                  className="w-full h-12 rounded-xl bg-background border-0 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                  placeholder="Child's name"
                />
              </div>
              <div>
                <label className="section-label block mb-2.5">Class</label>
                <select
                  required
                  value={form.student_class}
                  onChange={(e) => setForm({ ...form, student_class: e.target.value })}
                  className="w-full h-12 rounded-xl bg-background border-0 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                >
                  <option value="">Select</option>
                  <optgroup label="Tuition Classes">
                    {["Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10 – Science", "Class 10 – Social Studies (SST)", "Class 10 – English", "Class 10 – Hindi"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Special Classes">
                    {["Phonics", "Drawing", "Folk Art"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>
            <div>
              <label className="section-label block mb-2.5">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm({ ...form, rating: star })}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={28}
                      strokeWidth={1.5}
                      className={star <= form.rating ? "text-primary fill-primary" : "text-muted"}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="section-label block mb-2.5">Your Experience</label>
              <textarea
                required
                maxLength={1000}
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-background border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none"
                placeholder="How has the tuition helped your child?"
              />
            </div>
            <Button variant="gold" className="w-full" disabled={submitting}>
              <Send size={16} className="mr-1" />
              {submitting ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SubmitReview;
