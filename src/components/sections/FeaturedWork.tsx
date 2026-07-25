import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function FeaturedWork() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Featured Work"
          title="Building systems with intention."
          subtitle="A selection of projects that combine technology, thoughtful design, and real-world problem solving."
        />
        <div className="max-w-4xl">

            <ProjectCard
                title="Nexus"
                subtitle="Academic Research & Capstone Management Platform"
                summary="Transforming institutional knowledge into a searchable ecosystem that helps students discover prior work, refine proposals, and build upon ideas instead of unknowingly repeating them."
                roles={[
                    "Systems Analysis",
                    "Product Design",
                    "Full Stack Development",
                ]}
                technologies={[
                    "Next.js",
                    "Laravel",
                    "PostgreSQL",
                    "UX",
                ]}
                href="/projects/nexus"
            />
                    

        </div>
      </Container>
    </Section>
  );
}