import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-blurple/10 bg-space/65 backdrop-blur-md">
      <div className="mx-auto flex w-full 2xl:max-w-7xl items-center justify-between gap-4 px-6 py-4 md:py-6">
        <Link href={"/"} className="flex items-center gap-2 shrink-0 transition-transform hover:scale-102">
          <img
            src="/header-logo-w.svg"
            alt="formcord"
            className="object-contain w-[120px] md:w-[140px]"
            fetchPriority="high"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-6 text-zinc-300 md:flex font-mono text-sm">
          <Link className="hover:text-blurple transition-colors duration-200" href="/#features">
            Features
          </Link>
          <Link className="hover:text-blurple transition-colors duration-200" href="/docs">
            Docs
          </Link>
          <Link className="hover:text-blurple transition-colors duration-200" href="/changelog">
            Changelog
          </Link>
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-3">
          <Link
            className="rounded-full ring-2 ring-blurple/20 hover:ring-blurple/50 hover:bg-blurple/10 text-zinc-200 hover:text-white
            inline-flex items-center gap-2 font-mono px-3 py-1.5 transition duration-300 shadow-sm"
            href="https://github.com/ioNihal/formcord"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/github-mark-white.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-80"
            />
           <span className="hidden md:block">GitHub</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
