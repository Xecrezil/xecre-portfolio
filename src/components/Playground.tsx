import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";
import Badge from "./ui/Badge";
import Section from "./ui/Section";
import Container from "./ui/Container";
import Divider from "./ui/Divider";

export default function Playground() {
  return (
    <Section>
      <Container>

      <SectionTitle
        eyebrow="Components"
        title="Design System"
        subtitle="Every interface element begins here."
      />

      <GlassCard className="space-y-4">
        <Divider />

        <h3 className="text-2xl font-semibold">
          Glass Card
        </h3>

        <p className="text-sm text-[var(--muted)]">
            Used across Projects, Leadership, Observatory, and Contact.
        </p>

        <p className="text-[var(--muted)]">
          Reusable card component.
        </p>

        <div className="flex flex-wrap gap-2">

          <Badge>Next.js</Badge>

          <Badge>Leadership</Badge>

          <Badge>UI/UX</Badge>

          <Badge>Project Management</Badge>

        </div>

      </GlassCard>
        </Container>
    </Section>
  );
}