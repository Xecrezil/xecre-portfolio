import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        glass
        rounded-[var(--radius-md)]
        p-6
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_0_40px_rgba(93,169,255,.12)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}