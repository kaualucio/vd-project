import SplitText from '@/animations/TextAnimations/SplitText/SplitText'

interface TextContentProps {
  content: string
}

export const TextContent = ({ content }: TextContentProps) => {
  return (
    <div className=" pb-10 grid gap-2">
      <SplitText
        text={content}
        className="text-white text-lg sm:text-xl font-thin text-center sm:px-5 "
        delay={10}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
    </div>
  )
}
