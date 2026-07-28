import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function FeaturedWork() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Building systems with intention."
          subtitle="Every project begins with a problem worth solving. My work focuses on transforming complex challenges into thoughtful digital experiences."
        />
        <div className="mx-auto max-w-5xl">

            <div className="max-w-3xl mb-12">

              <p className="uppercase tracking-[0.4em] text-sm text-[var(--primary)]">
                Flagship Project
              </p>

              <h2 className="mt-4 text-5xl font-bold">
                Featured Work
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Every project begins with a problem worth solving.
                Nexus represents my belief that thoughtful systems can
                transform not only workflows, but the experiences of the
                people behind them.
              </p>

            </div>

            <div className="mt-16">
              <ProjectCard
                  title="Nexus"
                  subtitle="Academic Research & Capstone Management Platform"
                  summary="Transforming institutional knowledge into a searchable ecosystem that helps students discover prior work, refine proposals, and build upon ideas instead of unknowingly repeating them."
                  status="Product Discovery Complete"
                  roles={[
                      "Systems Analysis",
                      "Product Owner  ",
                      "Full Stack Developer",
                  ]}
                  technologies={[
                      "Next.js",
                      "Laravel",
                      "PHP",
                      "MYSQL",
                      "Figma",
                  ]}
                  href="/projects/nexus"

                  featured
              />
            </div>
                    

        </div>
      </Container>
    </Section>
  );
}