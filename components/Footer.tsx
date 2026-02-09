import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-900">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 text-xs text-zinc-400">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href={"/"} className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5865F2] text-[10px] font-semibold text-white">
              F
            </div>
            <span>Formcord</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link className="hover:text-white" href="/docs">
              Docs
            </Link>
            {/* <Link className="hover:text-white" href="#changelog">
              Changelog
            </Link> */}
            <Link
              className="hover:text-white"
              href="https://github.com/ioNihal/formcord"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <span className="text-gray-300">MIT</span>
          </div>
        </div>

        <div className="mt-3 lg:mt-6 border-t border-white/5 pt-6 text-center">
          <div className="text-gray-300 text-xs sm:text-sm">
            Universal Discord notifications with zero dependencies.
          </div>
          <div className="mt-2 text-xs text-gray-300">
            Developed by{" "}
            <Link
              href="https://ionihal.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-100 hover:text-blue-300"
            >
              Nihal
            </Link>
          </div>
          <div className="mt-2 text-[10px] text-blue-400">
            This project is not affiliated with or endorsed by Discord.
          </div>
        </div>
      </div>
    </footer>
  );
}
