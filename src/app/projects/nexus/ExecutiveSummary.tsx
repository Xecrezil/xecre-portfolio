import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ExecutiveSummary() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
            Executive Summary
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Transforming the academic research lifecycle.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Nexus is a university-wide academic lifecycle platform designed to
            transform the way higher education institutions manage, develop,
            preserve, and continuously build upon student-led research and
            capstone projects.
          </p>
        </div>
      </Container>
    </Section>
  );
}