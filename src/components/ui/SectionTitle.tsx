interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto" : ""}`}>

      {eyebrow && (
        <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)]">
          ✦ {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-4
            max-w-2xl
            leading-8
            text-[var(--muted)]
            ${centered ? "mx-auto" : ""}
          `}
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}