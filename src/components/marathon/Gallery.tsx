import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import galleryImage1 from "@/assets/gallery-1.jpg";
import galleryImage2 from "@/assets/gallery-2.jpg";
import galleryImage3 from "@/assets/gallery-3.jpg";
import galleryImage4 from "@/assets/gallery-4.jpg";
import galleryImage5 from "@/assets/gallery-5.jpg";

const images = [
  { src: galleryImage1, alt: "Runner on city street", span: "row-span-2" },
  { src: galleryImage2, alt: "Finish line celebration", span: "" },
  { src: galleryImage3, alt: "Aerial view of runners", span: "" },
  { src: galleryImage4, alt: "Close-up of runner's feet", span: "col-span-2" },
  { src: galleryImage5, alt: "Runner at dawn", span: "row-span-2" },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section-padding relative overflow-hidden bg-secondary"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-athletic mb-4 inline-block text-cream/50"
          >
            Moments That Matter
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-lg uppercase text-cream"
          >
            Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl font-editorial text-editorial-md italic text-cream/70"
          >
            Every stride tells a story
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`image-hover group relative overflow-hidden ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-editorial text-lg italic text-cream/60">
            "The miracle isn't that I finished. The miracle is that I had the courage to start."
          </p>
          <span className="mt-2 block font-display text-xs uppercase tracking-widest text-cream/40">
            — John Bingham
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
