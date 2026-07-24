import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-7 py-3 transition-all duration-300 font-medium";

  const variants = {
    primary:
      "bg-[var(--primary)] text-black hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20",

    secondary:
      "glass hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}