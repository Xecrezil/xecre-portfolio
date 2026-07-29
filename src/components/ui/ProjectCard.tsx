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

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border  border-[var(--primary)]/20 bg-[var(--primary)]/10  px-3 py-1 text-sm text-[var(--primary)]">
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
                className="inline-flex items-center gap-2 font-medium text-[var(--primary)] transition duration-300 hover:gap-3"
            >
                View Case Study 
                <span>→</span>
            </Link>
        </div>
    </GlassCard>
  );
}