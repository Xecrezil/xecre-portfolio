import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Link from "next/link";


interface ProjectCardProps {
  title: string;
  subtitle: string;
  summary: string;

  roles: string[];
  technologies: string[];

  href: string;

  featured?: boolean;
}

    export default function ProjectCard({
    title,
    subtitle,
    summary,
    roles,
    technologies,
    href,
  
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
            {summary}
        </p>

        <div className="space-y-4">

            <div>
                <p className="mb-2 text-sm uppercase tracking-wider text-[var(--muted)]">
                My Role
                </p>

                <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                    <Badge key={role}>
                    {role}
                    </Badge>
                ))}
                </div>
            </div>

            <div>
                <p className="mb-2 text-sm uppercase tracking-wider text-[var(--muted)]">
                Technology
                </p>

                        <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <Badge key={tech}>
                            {tech}
                            </Badge>
                        ))}
                        </div>
            </div>

        </div>
        <div className="flex justify-end pt-2">
            <Link
                href={href}
                className="
                text-sm
                font-medium
                text-[var(--primary)]
                transition-colors
                hover:text-white
                "
            >
                Read Case Study →
            </Link>
        </div>
    </GlassCard>
  );
}