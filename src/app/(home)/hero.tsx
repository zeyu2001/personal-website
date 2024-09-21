'use client'

import { useState } from 'react'

import { Container } from '@/components/Container'
import { AnimatedText } from '@/components/motion/AnimatedText'
import { FadeIn } from '@/components/motion/FadeIn'

import { Socials } from './socials'

export const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const onAnimationComplete = () => setAnimationComplete(true)

  const headingText = ['Software engineer,', 'wannabe hacker,', 'not an AI shill.']

  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Hello, I&apos;m Zayne.
        </h1>
        <AnimatedText
          once
          text={headingText}
          staggerDelay={0.5}
          el="h2"
          onAnimationComplete={onAnimationComplete}
          className="mt-6 text-xl text-zinc-700 dark:text-zinc-300"
        />
        <FadeIn canStart={animationComplete}>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Zayne (or Zeyu, if you prefer mandarin), a software engineer with a background in computer
            security. I&apos;m a Computer Science student at Cambridge, and I love to build things that make a
            difference.
          </p>
          <Socials />
        </FadeIn>
      </div>
    </Container>
  )
}
