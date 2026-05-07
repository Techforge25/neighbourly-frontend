"use client";

import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <section className="lg:max-w-[1296px] mx-auto md:my-10 p-6">
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-manrope font-bold text-text-dark-secondary text-center
          text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.625rem]
          leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[3.25rem]"
      >
        <span className="text-primary">Suburb</span> says is a free way to find
        local trades and services based on{" "}
        <span className="text-primary">
          genuine recommendations from people in your suburb.
        </span>{" "}
        We&apos;re not a directory - businesses earn their place by being
        trusted, not by paying to be here.
      </motion.p>
    </section>
  );
};

export default TrustSection;
