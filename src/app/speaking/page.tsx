import { type Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

const Appearance = dynamic(
  () => import('./appearance').then((mod) => mod.Appearance),
  { ssr: false },
)

function SpeakingSection({
  children,
  ...props
}: Readonly<React.ComponentPropsWithoutRef<typeof Section>>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'History of my conversations with nerds.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="History of my conversations with nerds."
      intro="I've been lucky enough to speak at a number of conferences, meetups, and training sessions over the years. Here are some of the highlights."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            pdfLink="/slides/pwnEd5.pdf"
            title="Client-Side Attacks in a Post-XSS World"
            description="Exploring the merits and potential pitfalls of various protections against XSS and CSRF, novel classes of client-side attacks and some real-world examples of their applications."
            event="pwnEd 5, University of Edinburgh, 2024"
            cta="Get slides"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=SEVdfk0vTCM"
            title="XS-Leaks — Client-Side Attacks in a Post-XSS World"
            description="With the evolution of web frameworks and browsers, XSS and CSRF have become increasingly rare. A new class of vulnerabilities known as XS-Leaks is now one of the primary concerns for client-side web security."
            event="BSides London 2023"
            cta="Watch video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=1i6ejDy3Qko"
            title="HTTP Request Smuggling in the Multiverse of Parsing Flaws"
            description="Novel HTTP request smuggling techniques rely on subtle deviations from the HTTP standard. How I found 10 vulnerabilities in popular open-source web servers and proxies."
            event="BSides Singapore 2022"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Training">
          <Appearance
            pdfLink="/slides/sgco.pdf"
            title="DEFCON CTF Qualifiers 2023 — Web Challenges"
            description="A walkthrough of the web challenges from the DEFCON CTF Qualifiers 2023, for students part of the Singapore Cyber Olympians Programme."
            event="Singapore Cyber Olympians Programme, 2023"
            cta="Get slides"
          />
        </SpeakingSection>
        <SpeakingSection title="Meetups">
          <Appearance
            pdfLink="/slides/div0.pdf"
            title="Learn Hacking Through CTF Competitions"
            description="what a year of playing CTF competitions and competing against top teams globally has taught me, how CTF challenges can realistically model real-world vulnerabilities, and how ethical hackers can create interesting and educational CTF challenges."
            event="Div0 Bug Bounty Quarter, 2022"
            cta="Get slides"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
