'use client'

import {
  motion,
  useAnimation,
  useInView,
  Variant,
  VariantLabels,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

type AnimatedTextProps = {
  text: string | string[]
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  repeatDelay?: number
  staggerDelay?: number
  animation?: {
    hidden: Variant
    visible: Variant
  }
  onAnimationComplete?: () => void
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once,
  repeatDelay,
  staggerDelay = 0.1,
  animation = defaultAnimations,
  onAnimationComplete,
}: AnimatedTextProps) => {
  const controls = useAnimation()
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const show = () => {
      controls.start('visible')
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden')
          controls.start('visible')
        }, repeatDelay)
      }
    }

    if (isInView) {
      show()
    } else {
      controls.start('hidden')
    }
    return () => clearTimeout(timeout)
  }, [isInView, controls, repeatDelay, onAnimationComplete])

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: staggerDelay } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((words, wordsIndex) => (
          <span className="inline-block" key={`${words}-${wordsIndex}`}>
            <motion.span
              key={`${words}-${wordsIndex}`}
              className="inline-block"
              variants={animation}
              onAnimationComplete={
                onAnimationComplete && wordsIndex === textArray.length - 1
                  ? (variant: VariantLabels) => {
                      if (variant === 'visible') {
                        onAnimationComplete()
                      }
                    }
                  : () => {}
              }
            >
              {words}
            </motion.span>
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
