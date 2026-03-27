import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Check, X, Lock, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Testimonial {
  id: string;
  parent_name: string;
  student_name: string;
  student_class: string;
  message: string;
  rating: number;
  approved: boolean;
  created_at: string;
}

const AdminReviews = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [storedPassword, setStoredPassword] = useState("");

  const fetchTestimonials = async (pwd: string) => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("manage-testimonials", {
      body: { action: "list", password: pwd },
    });

    if (error || data?.error) {
      toast.error("Failed to load reviews");
      if (data?.error === "Unauthorized") {
        setAuthenticated(false);
      }
    } else {
      setTestimonials(data || []);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("manage-testimonials", {
      body: { action: "list", password },
    });

    if (error || data?.error === "Unauthorized") {
      toast.error("Incorrect password");
      setLoading(false);
      return;
    }

    setStoredPassword(password);
    setAuthenticated(true);
    setTestimonials(data || []);
    setLoading(false);
  };

  const handleAction = async (id: string, action: "approve" | "reject") => {
    setActionLoading(id);
    const { data, error } = await supabase.functions.invoke("manage-testimonials", {
      body: { action, id, password: storedPassword },
    });

    if (error || data?.error) {
      toast.error(`Failed to ${action} review`);
    } else {
      toast.success(`Review ${action === "approve" ? "approved ✓" : "rejected ✗"}`);
      fetchTestimonials(storedPassword);
    }
    setActionLoading(null);
  };

  const pending = testimonials.filter((t) => !t.approved);
  const approved = testimonials.filter((t) => t.approved);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card-static p-8 rounded-3xl w-full max-w-sm"
        >
          <div className="text-center mb-6">
            <Lock className="text-primary mx-auto mb-3" size={36} strokeWidth={1.5} />
            <h2 className="font-serif text-xl text-foreground">Admin Access</h2>
            <p className="text-muted-foreground text-sm mt-1">Enter your admin password</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
            <Button variant="gold" className="w-full" disabled={loading}>
              {loading ? "Checking..." : "Login"}
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl text-foreground">Review Manager</h1>
            <p className="text-muted-foreground text-sm">Approve or reject parent testimonials</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchTestimonials(storedPassword)}
            disabled={loading}
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
          </Button>
        </div>

        {/* Pending Reviews */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Pending Reviews ({pending.length})
          </h2>
          {pending.length === 0 ? (
            <p className="text-muted-foreground text-sm py-6 text-center glass-card-static rounded-2xl">
              No pending reviews
            </p>
          ) : (
            <div className="space-y-4">
              {pending.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card-static p-6 rounded-2xl"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-foreground text-sm mb-2">"{t.message}"</p>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="text-primary fill-primary" size={12} />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {t.parent_name} — Parent of {t.student_name} ({t.student_class})
                        <span className="ml-2">
                          {new Date(t.created_at).toLocaleDateString("en-IN")}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleAction(t.id, "approve")}
                        disabled={actionLoading === t.id}
                      >
                        <Check size={14} />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleAction(t.id, "reject")}
                        disabled={actionLoading === t.id}
                      >
                        <X size={14} />
                        Reject
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Approved Reviews */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Approved Reviews ({approved.length})
          </h2>
          {approved.length === 0 ? (
            <p className="text-muted-foreground text-sm py-6 text-center glass-card-static rounded-2xl">
              No approved reviews yet
            </p>
          ) : (
            <div className="space-y-3">
              {approved.map((t) => (
                <div key={t.id} className="glass-card-static p-5 rounded-2xl opacity-80">
                  <p className="text-foreground text-sm mb-1">"{t.message}"</p>
                  <p className="text-xs text-muted-foreground">
                    {t.parent_name} — {t.student_name} ({t.student_class})
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
