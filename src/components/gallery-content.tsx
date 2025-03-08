import FadeContent from '@/animations/Animations/FadeContent/FadeContent'
import CircularGallery from '@/animations/Components/CircularGallery/CircularGallery'

export const GaleryContent = () => {
  return (
    <div className="w-full">
      <FadeContent blur={true} delay={150} duration={1000} easing="ease-out" initialOpacity={0} className="w-full">
        <div className="h-[500px] md:h-[500px]">
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </FadeContent>
    </div>
  )
}
