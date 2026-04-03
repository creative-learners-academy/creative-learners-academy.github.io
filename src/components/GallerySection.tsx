import { motion } from "framer-motion";
import galleryArt from "@/assets/gallery-art-class.jpg";
import galleryKidsLearning from "@/assets/gallery-kids-learning.jpg";
import galleryKidsClassroom from "@/assets/gallery-kids-classroom.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import galleryPhonics from "@/assets/gallery-phonics-class.jpg";
import galleryGroup from "@/assets/gallery-group-class.jpg";
import galleryBoys from "@/assets/gallery-boys-studying.jpg";
import galleryStudents from "@/assets/gallery-students-writing.jpg";

const images = [
  { src: galleryArt, alt: "Art & drawing class with students" },
  { src: galleryCelebration, alt: "Festival celebration with students" },
  { src: galleryKidsClassroom, alt: "Kids in classroom session" },
  { src: galleryGroup, alt: "Group learning session" },
  { src: galleryKidsLearning, alt: "Students learning together" },
  { src: galleryPhonics, alt: "Phonics & drawing class" },
  { src: galleryBoys, alt: "Boys studying together" },
  { src: galleryStudents, alt: "Students writing practice" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 relative">
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
              <div className="rounded-2xl overflow-hidden border border-border/50 group" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{
                    filter: 'brightness(1.08) contrast(1.05) saturate(1.1)',
                  }}
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
