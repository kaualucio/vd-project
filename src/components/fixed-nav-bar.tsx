
import StarBorder from '@/animations/TextAnimations/StarBorder/StarBorder'
import { ImagesIcon, MailOpenIcon, HouseIcon, PlayCircleIcon } from 'lucide-react'
import React from 'react'

export const FixedNavbar = () => {
  return (
    <div className="fixed bottom-10 w-full">
      <StarBorder
        as="div"
        className="!block w-full max-w-fit mx-auto"
        childrenContainerCls="bg-gradient-to-b from-zinc-800 to-zinc-900 py-1 px-1 rounded-full"
      >
        <div className="flex items-end gap-3">
          <button className="cursor-pointer text-white text-sm font-thin bg-transparent hover:bg-zinc-700 duration-200 flex items-center  gap-5 sm:gap-2 rounded-full px-3 sm:px-2 py-3">
            <HouseIcon color="#fff" strokeWidth={1} className="size-5 text-white" />
            <span className="hidden sm:inline">Ver tudo</span>
          </button>
          <button className="cursor-pointer text-white text-sm font-thin bg-transparent hover:bg-zinc-700 duration-200 flex items-center gap-5 sm:gap-2 rounded-full px-3 sm:px-2  py-3">
            <MailOpenIcon color="#fff" strokeWidth={1} className="size-5 text-white" />
            <span className="hidden sm:inline">Mensagem</span>
          </button>
          <button className="cursor-pointer text-white text-sm font-thin bg-transparent hover:bg-zinc-700 duration-200 flex items-center gap-5 sm:gap-2 rounded-full px-3 sm:px-2 py-3">
            <ImagesIcon color="#fff" strokeWidth={1} className="size-5 text-white" />
            <span className="hidden sm:inline">Galeria</span>
          </button>
          <button className="cursor-pointer text-white text-sm font-thin bg-transparent hover:bg-zinc-700 duration-200 flex items-center gap-5 sm:gap-2 rounded-full px-3 sm:px-2 py-3">
            <PlayCircleIcon color="#fff" strokeWidth={1} className="size-5 text-white" />
            <span className="hidden sm:inline">Clique me</span>
          </button>
        </div>
      </StarBorder>
    </div>
  )
}
