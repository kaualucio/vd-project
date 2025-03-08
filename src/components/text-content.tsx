import SplitText from '@/animations/TextAnimations/SplitText/SplitText'

interface TextContentProps {
  content: string
}

export const TextContent = ({ content }: TextContentProps) => {
  return (
    <div className="pt-16 pb-40 grid gap-2">
      <SplitText
        text={content}
        className="text-xl sm:text-2xl font-thin text-center"
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
