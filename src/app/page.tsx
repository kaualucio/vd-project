'use client'
import BlurText from "@/animations/TextAnimations/BlurText/BlurText";
// import { EmbedSpotify } from "@/components/embed-spotify";
import { GaleryContent } from "@/components/gallery-content";
import { TextContent } from "@/components/text-content";

export default function Home() {
  return (
    <>
      <section className="pb-16 w-full max-w-[900px] mx-auto px-4 flex flex-col items-center justify-center overflow-hidden">
        <BlurText
          text="🥳 Feliz Aníversário! 🎂🎈"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-white items-center justify-center  z-[99] text-4xl sm:text-5xl font-bold"
        />
        <GaleryContent />
        <TextContent content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat earum maiores quas praesentium, amet beatae id dolorum excepturi voluptates culpa reiciendis dolore nobis possimus illo porro quam. Vel, harum magnam?" />
      </section>    
    </>
  );
}
