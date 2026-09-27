"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/animations";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type IdentityMode = "xecre" | "bazil";

interface HeroProps {
  identityMode: IdentityMode;
  onToggleIdentity: () => void;
}

export default function Hero({
  identityMode,
  onToggleIdentity,
}: HeroProps) {
  return (
    <section className="min-h-[100svh] flex items-center pt-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Label */}
            <motion.p
              variants={fadeUp}
              className="
                uppercase
                tracking-[0.5em]
                text-sm
                text-[var(--primary)]
              "
            >
              Creative Technologist
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="mt-4 h-px w-24 bg-[var(--primary)]"
            />

            {/* Identity */}
            <motion.h1
              key={identityMode}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className={`
                mt-5
                font-bold
                tracking-tight
                leading-none
                text-7xl
                md:text-9xl
                transition-colors
                duration-1000
                ${
                  identityMode === "bazil"
                    ? "text-emerald-300"
                    : "text-[var(--foreground)]"
                }
              `}
            >
              {identityMode === "xecre" ? "Xecre" : "Bazil Ruaro"}
            </motion.h1>

            {/* Identity Toggle */}
            <motion.button
              variants={fadeUp}
              onClick={onToggleIdentity}
              className="
                group
                mt-6
                flex
                items-center
                gap-3
                text-sm
                text-[var(--muted)]
                transition-colors
                duration-500
                hover:text-[var(--foreground)]
              "
              type="button"
            >
              <span
                className="
                  relative
                  flex
                  h-6
                  w-11
                  items-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  p-1
                  transition-all
                  duration-700
                "
              >
                <span
                  className={`
                    h-4
                    w-4
                    rounded-full
                    transition-all
                    duration-700
                    ${
                      identityMode === "bazil"
                        ? "translate-x-5 bg-emerald-300"
                        : "translate-x-0 bg-blue-300"
                    }
                  `}
                />
              </span>

              <span>
                {identityMode === "xecre"
                  ? "Switch to Bazil"
                  : "Return to Xecre"}
              </span>
            </motion.button>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              Building thoughtful digital experiences
              where technology, leadership,
              and creativity move with purpose.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap gap-4"
            >
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
              className="
                mt-20
                flex
                flex-col
                items-start
                gap-2
                text-sm
                text-[var(--muted)]
              "
            >
              <span className="text-lg">↓</span>
              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="
              relative
              hidden
              items-center
              justify-center
              lg:flex
            "
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Atmospheric Glow */}
            <div
              className={`
                absolute
                h-[30rem]
                w-[30rem]
                rounded-full
                blur-3xl
                transition-all
                duration-[1500ms]
                ${
                  identityMode === "bazil"
                    ? "bg-emerald-400/15 scale-110"
                    : "bg-blue-400/10 scale-100"
                }
              `}
            />

            {/* Portrait */}
            <div
              className="
                relative
                z-10
                h-80
                w-80
                overflow-hidden
                rounded-full
                border
                border-white/10
                glass
              "
            >
              <Image
                src="/portrait.jpg"
                alt="Portrait of Xecre"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}