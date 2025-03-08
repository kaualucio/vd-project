import FadeContent from '@/animations/Animations/FadeContent/FadeContent';
import React from 'react'

interface EmbedSpotifyProps {
  embed_link: string;
}

export const EmbedSpotify = ({ embed_link }: EmbedSpotifyProps) => {
  return (
    <FadeContent blur={true} delay={150} duration={1000} easing="ease-out" initialOpacity={0} className="w-full z-50">  
      <div className="w-full max-w-lg mx-auto">
        <iframe className="rounded-[12px]" src={`${embed_link}?utm_source=generator&theme=0`} width="100%" height="140" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </FadeContent>
  )
}
