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
          <p className="section-label mb-3">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            A Glimpse Into Our Classroom
          </h2>
        </motion.div>

        <div className="snap-gallery">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-[80%] sm:w-[45%] lg:w-[30%] flex-shrink-0"
            >
              <div className="glass-card overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-video object-cover outline outline-1 outline-offset-[-1px] outline-foreground/5"
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
