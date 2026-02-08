import HelpersIncludedSection from "@/components/HelpersIncluded/HelpersIncludedSection";
import HeroSection from "@/components/Hero/HeroSection";
import OpenSourceSection from "@/components/OpenSource/OpenSourceSection";
import RunsEverywhereSection from "@/components/RunsEverywhere/RunsEverywhereSection";
import ThemingSection from "@/components/Theming/ThemingSection";
import WhyFormcordSection from "@/components/WhyFormcord/WhyFormcordSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />


      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="mx-auto mb-6 flex max-w-xl items-center justify-between text-[10px] sm:text-xs lg:text-sm text-zinc-500">
          <span className="uppercase tracking-widest">Discord Preview</span>
          <span>Real message payload</span>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-4xl ring-3 ring-white/10 bg-black/40 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
            <Image
              src="/discordMessageExample.png"
              alt="discord-message-example-image"
              height={1000}
              width={1200}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>
      </section>


      <WhyFormcordSection />


      <HelpersIncludedSection />

      <ThemingSection />

      <RunsEverywhereSection />


      <OpenSourceSection />
    </main>
  );
}
