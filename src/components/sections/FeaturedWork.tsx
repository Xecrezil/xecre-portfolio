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
            title="HOMES"
            subtitle="Subdivision Information System with OCR Vehicle Recognition"
            description="Designed to streamline homeowner management, visitor access, amenity reservations, and gate security into one unified platform."
            tags={[
              "Laravel",
              "PHP",
              "MySQL",
              "OCR",
              "UI/UX",
            ]}
          />
          <ProjectCard
            title="Barkive"
            subtitle="Lost & Found Platform"
            description="..."
            tags={[
                "Next.js",
                "Firebase",
                "Tailwind",
            ]}
            />
                    

        </div>
      </Container>
    </Section>
  );
}