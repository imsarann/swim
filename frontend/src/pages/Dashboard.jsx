import mainPool from "../assets/main-pool.jpg";
import pool2 from "../assets/pool-2.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [pool, setPool] = useState(mainPool);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if initial animation is done

  useEffect(() => {
    const interval = setInterval(() => {
      setPool((prev) => (prev === pool2 ? mainPool : pool2));
      setHasAnimated(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="w-screen h-screen relative overflow-hidden">
        <motion.img
          initial={!hasAnimated ? { scale: 2 } : false}
          animate={{ scale: 1, transition: { duration: 4 } }}
          src={pool}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover brightness-40 z-0"
        />

        <div className="relative z-10 h-full w-full flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            className="flex flex-1 items-center justify-center text-center px-6 text-white"
          >
            <div
              className="group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                textShadow: isHovered ? "0 0 50px #fff" : "none",
              }}
            >
              <div className="text-[85px] font-Bangers mb-4">
                Swimming Pool Consultant & Contractor
              </div>
              <p className="text-2xl font-Julee font-medium max-w-2xl mx-auto">
                We bring luxury and precision to your aquatic dreams — from consultation to construction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
