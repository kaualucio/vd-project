'use client'
import BlurText from "@/animations/TextAnimations/BlurText/BlurText";
// import { EmbedSpotify } from "@/components/embed-spotify";
import { GaleryContent } from "@/components/gallery-content";
import { ConfettiButton } from "@/components/magicui/confetti";
import { TextContent } from "@/components/text-content";

export default function Home() {
  return (
    <>
      <section className="py-10 sm:py-20 w-full max-w-[900px] mx-auto px-4 flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col gap-3">

          <BlurText
            text="🥳🎂🎈"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-white items-center justify-center  z-[99] text-4xl sm:text-5xl font-bold"
          />
          <BlurText
            text="Feliz Aníversário!"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-white items-center justify-center  z-[99] text-[40px] sm:text-5xl font-bold"
          />
        </div>
        <GaleryContent />
        <TextContent content="Parabéns, Jeni! Feliz aniversário! Desejo tudo de bom e de melhor para você. Que seu dia seja incrível e que você aproveite da melhor forma possível com sua família e amigos. Que venham muitos anos pela frente." />
        <ConfettiButton/>

      </section>    
    </>
  );
}
