'use client'
import Stack from '@/animations/Components/Stack/Stack'
import { div } from 'framer-motion/client';
import React from 'react'

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];


export const StackGalery = () => {
  return (
    <div className="-ml-8 sm:ml-0">
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 260, height: 370 }}
        cardsData={images}
      />
    </div>
  )
}
