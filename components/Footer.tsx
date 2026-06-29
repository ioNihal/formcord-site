import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blurple/10 bg-space/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 text-xs text-zinc-400">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href={"/"} className="flex items-center gap-3 transition-transform hover:scale-102">
            <img
              src="/header-logo-w.svg"
              alt="formcord"
              className="object-contain w-[120px] md:w-[140px]"
              loading="lazy"
            />
          </Link>

          <div className="flex items-center gap-5 font-mono text-[11px] sm:text-xs">
            <Link className="hover:text-blurple transition-colors" href="/docs">
              Docs
            </Link>
            <Link className="hover:text-blurple transition-colors" href="/changelog">
              Changelog
            </Link>
            <Link
              className="hover:text-blurple transition-colors"
              href="https://github.com/ioNihal/formcord"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <span className="text-zinc-500">MIT</span>
          </div>
        </div>

        <div className="mt-3 lg:mt-6 border-t border-white/5 pt-6 text-center">
          <div className="text-zinc-300 text-xs sm:text-sm">
            Universal Discord notifications with zero dependencies.
          </div>

          <div className="mt-2 text-xs text-zinc-400">
            Developed by{" "}
            <Link href="https://ionihal.vercel.app" target="_blank"
              rel="noreferrer" className="text-blurple underline underline-offset-2 decoration-blurple/40
            hover:text-white hover:decoration-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blurple"  >
              Nihal
            </Link>
          </div>

          <div className="mt-2 text-[10px] text-blurple/60">
            This project is not affiliated with or endorsed by Discord.
          </div>
        </div>

      </div>
    </footer>
  );
}
