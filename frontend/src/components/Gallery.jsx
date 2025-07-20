import React from "react";
import image1 from "../assets/gallery-image.jpg";
import { motion, useMotionValue } from "framer-motion";

export default function Gallery() {
  const imageArray = [image1, image1, image1, image1, image1, image1];

  return (
    // <motion.div className="bg-red-00">

    <motion.div className="grid grid-cols-3 justify-between absolute">
      {imageArray.map((img, i) => {
        const rotateX = useMotionValue(0);
        const rotateY = useMotionValue(0);

        const handleMouseMove = (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateAmountX = -((y - centerY) / centerY) * 8;
          const rotateAmountY = ((x - centerX) / centerX) * 8;

          rotateX.set(rotateAmountX);
          rotateY.set(rotateAmountY);
        };

        const resetRotation = () => {
          rotateX.set(0);
          rotateY.set(0);
        };

        return (
          <motion.div
            key={i}
            className="group p-2 m-4 rounded-xl flex justify-center shadow-2xl bg-white/80 mt-5"
            style={{
              
              perspective: 1000,
            }}
            whileHover={{scale : 1.04}}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
          >
            <motion.img
              src={img}
              alt="image1"
              className="h-[34vh] m-2 rounded-xl"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.3 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        );
      })}
    </motion.div>
    // </motion.div>
  );
}
