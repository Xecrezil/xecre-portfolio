import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <GlassCard className="space-y-6">

      <div>
        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-lg text-[var(--primary)]">
          {subtitle}
        </p>
      </div>

      <p className="leading-8 text-[var(--muted)]">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>
            {tag}
          </Badge>
        ))}
      </div>

    </GlassCard>
  );
}