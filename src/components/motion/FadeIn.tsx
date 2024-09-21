'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const FadeIn = ({ children, canStart = true }: { children: React.ReactNode; canStart?: boolean }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  useEffect(() => {
    const show = () => {
      controls.start('visible')
    }

    if (canStart && isInView) {
      show()
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls, canStart])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}
