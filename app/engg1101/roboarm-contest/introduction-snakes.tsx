"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type IntroductionSnakesProps = {
  blueSrc: string;
  redSrc: string;
};

export function IntroductionSnakes({ blueSrc, redSrc }: IntroductionSnakesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, x: -150, y: -55, rotate: -20, scale: 0.82 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -8, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 82, damping: 17, mass: 0.9 }}
        className="pointer-events-none absolute -left-14 -top-24 z-20 h-60 w-48 sm:-left-28 sm:-top-32 sm:h-[400px] sm:w-80 lg:-left-56 lg:-top-40 lg:h-[520px] lg:w-[420px]"
      >
        <Image
          src={blueSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 320px, 420px"
          className="object-contain drop-shadow-[0_22px_22px_rgba(37,99,235,0.3)]"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, x: 150, y: 65, rotate: 20, scale: 0.82 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 8, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 82, damping: 17, mass: 0.9, delay: 0.14 }}
        className="pointer-events-none absolute -bottom-24 -right-14 z-20 h-60 w-48 sm:-bottom-32 sm:-right-28 sm:h-[400px] sm:w-80 lg:-bottom-40 lg:-right-56 lg:h-[520px] lg:w-[420px]"
      >
        <Image
          src={redSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 320px, 420px"
          className="scale-x-[-1] object-contain drop-shadow-[0_22px_22px_rgba(239,68,68,0.26)]"
        />
      </motion.div>
    </>
  );
}
