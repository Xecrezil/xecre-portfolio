import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function NexusHero() {
  return (
<Section>
        <Container>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
            Case Study
          </p>

          <h1 className="mt-4 text-6xl font-bold">
            Nexus
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-[var(--muted)]">
            A university-wide academic lifecycle platform.
          </p>
        </Container>
      </Section>
);
}