import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <Container>

        <nav
          className="
            mt-6
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-black/20
            px-6
            py-4
            backdrop-blur-xl
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <Image
              src="/xecre-logo.svg"
              alt="Xecre Logo"
              width={36}
              height={36}
              priority
            />

            <span className="text-lg font-medium tracking-[0.15em]">
              Xecre
            </span>
          </Link>

          {/* Links */}

          <ul className="flex gap-8 text-sm text-[var(--muted)]">

            <li>
              <a
                href="#projects"
                className="
                    transition-colors
                    duration-300
                    hover:text-[var(--primary)]
                "
                >
            Projects
            </a>
            </li>

            <li>
              <a
                href="#leadership"
                className="
                    transition-colors
                    duration-300
                    hover:text-[var(--primary)]
                "
                >
            Leadership
            </a>
            </li>

            <li>
              <a
                href="#Thoughts"
                className="
                    transition-colors
                    duration-300
                    hover:text-[var(--primary)]
                "
                >
            Thoughts
            </a>
            </li>

            <li>
              <a
                href="#Contacts"
                className="
                    transition-colors
                    duration-300
                    hover:text-[var(--primary)]
                "
                >
            Contacts
            </a>
            </li>

          </ul>

        </nav>

      </Container>

    </header>
  );
}