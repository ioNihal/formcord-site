import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur">
      <div className="mx-auto flex w-full 2xl:max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:py-6">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5865F2] text-sm font-semibold text-white">
            F
          </div>
          <span className=" font-semibold tracking-wide text-white">
            Formcord
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 text-zinc-300 md:flex">
          <Link className="hover:text-white" href="/#features">
            Features
          </Link>
          <Link className="hover:text-white" href="/docs">
            Docs
          </Link>
          {/* <Link className="hover:text-white" href="#changelog">
            Changelog
          </Link> */}
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-3">
          <Link
            className="rounded-full ring-2 ring-white/10 hover:ring-white/20 hover:bg-gray-600/30 text-zinc-200  hover:text-white
            inline-flex items-center gap-2 font-mono px-3 py-1.5 transition duration-300"
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
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
