import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-teaching.jpg";

const images = [
  { src: heroImg, alt: "Teaching session" },
  { src: gallery1, alt: "Study materials" },
  { src: gallery2, alt: "Classroom environment" },
  { src: gallery3, alt: "Students learning" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="section-label mb-4">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            A Glimpse Into Our{" "}
            <span className="italic gold-gradient-text">Classroom</span>
          </h2>
        </motion.div>

        <div className="snap-gallery px-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-[80%] sm:w-[48%] lg:w-[32%] flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
