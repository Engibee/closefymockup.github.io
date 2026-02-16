import { useReveal } from "../hooks/useReveal"

type AnimType =
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "aproximate"
  | "fade"
  | "blur"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  animType?: AnimType
}

const animationMap: Record<AnimType, { hidden: string; visible: string }> = {
  slideUp: {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },

  slideDown: {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },

  slideLeft: {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },

  slideRight: {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },

  aproximate: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },

  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },

  blur: {
    hidden: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0",
  },
}

export function Reveal({
  children,
  delay = 0,
  animType = "slideUp",
}: RevealProps) {
  const { ref, isVisible } = useReveal()

  const animation = animationMap[animType]

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? animation.visible : animation.hidden}
      `}
    >
      {children}
    </div>
  )
}