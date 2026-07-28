import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Link from "next/link";


interface ProjectCardProps {
  title: string;
  subtitle: string;
  summary: string;

  status: string;

  roles: string[];

  technologies: string[];

  href: string;

  featured?: boolean;
}

    export default function ProjectCard({
    title,
    subtitle,
    summary,
    status,
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

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            <span>{status}</span>
        </div>

        <p className="leading-8 text-[var(--muted)]">
            {summary}
        </p>

        <div className="space-y-6">

            <div>
                <h4 className="mb-3 text-sm uppercase tracking-wider text-[var(--muted)]">
                Roles
                </h4>

                <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                    <Badge key={role}>
                    {role}
                    </Badge>
                ))}
                </div>
            </div>

            <div>
                <h4 className="mb-3 text-sm uppercase tracking-wider text-[var(--muted)]">
                Technologies
                </h4>

                        <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <Badge key={tech}>
                            {tech}
                            </Badge>
                        ))}
                        </div>
            </div>

        </div>

        <div className="pt-4">
            <Link
                href={href}
                className="inline-flex items-center text-[var(--primary)] transition hover:translate-x-1"
            >
                View Case Study →
            </Link>
        </div>
    </GlassCard>
  );
}