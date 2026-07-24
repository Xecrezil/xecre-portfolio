"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center pt-24">
      <Container>
         <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div className="max-w-3xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible">
                  {/* Existing Hero content */}

            <motion.p variants={fadeUp}
                      className="
                        uppercase
                        tracking-[0.5em]
                        text-sm
                        text-[var(--primary)]
                      ">
              Creative Technologist
            </motion.p>
            <motion.div variants={fadeUp}
                className="mt-4 h-px w-24 bg-[var(--primary)]"
            />
            <motion.div
              variants={fadeUp}
              className="mt-4 h-px w-24 bg-[var(--primary)]"
            />
            <motion.h1 variants={fadeUp}
                className="
                  mt-5
                  text-7xl
                  md:text-9xl
                  font-bold
                  tracking-tight
                ">
              Xecre
            </motion.h1>

            <motion.p variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Building thoughtful digital experiences
              where technology, leadership,
              and creativity move with purpose.
            </motion.p>

            <motion.div variants={fadeUp}
                        className="mt-14 flex flex-wrap gap-4">
              <Button>
                Explore my work →
              </Button>

              <Button variant="secondary">
                Read Journal
              </Button>
            </motion.div>
            {/* Scroll Indicator */}
            <motion.div
              variants={fadeUp}
              className="mt-20 flex flex-col items-start gap-2 text-sm text-[var(--muted)]"
            >
              <span className="text-lg">↓</span>
              <span>Scroll to explore</span>
            </motion.div> 
          </motion.div>

            {/* Right */}
            <div className="relative hidden lg:flex items-center justify-center">
            {/* We'll add content here */}
              <div
                className="
                  absolute
                  h-96
                  w-96
                  rounded-full
                  bg-blue-400/10
                  blur-3xl
                "
              />
              <div
                className="
                  relative
                  z-10
                  flex
                  h-32
                  w-32
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  glass
                "
              >
                🦋
              </div>

          </div>
        </div>
      </Container>
    </section>
  );
}