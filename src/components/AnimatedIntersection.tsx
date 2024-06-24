import { useIntersectionObserver } from 'usehooks-ts'

type AnimatedIntersectionProps = {
  children: React.ReactNode;
};

export default function AnimatedIntersection({children} : AnimatedIntersectionProps ) {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })
  return (
    <div ref={ref} className={`${isIntersecting ? 'animate-zoom-back' : 'opacity-0'}`}>
      {children}
    </div>
  )
}