import clsx from 'clsx'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { socials } from '@/app/config/socials'
import { Container } from '@/components/Container'
import { Resume } from '@/components/Resume'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: Readonly<{
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}>) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm a Singapore-born, Cambridge-made software engineer. I got my start in computer security, and now I build products that make a difference.",
}

export default function About() {
  const notEmail = socials.filter(({ href }) => !href.startsWith('mailto:'))
  const email = socials.find(({ href }) => href.startsWith('mailto:'))

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs rotate-3 px-2.5 lg:max-w-none">
            <div className="card-wrapper">
              <div className="card-content h-full w-full">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover p-1 dark:bg-zinc-800 dark:p-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m a Singapore-born, Cambridge-made software engineer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              In high school, I was never a good student until I realised they
              won&apos;t let me take the Computer Science class unless I started
              getting better grades.
            </p>
            <p>
              I spent a good portion of my early career (pre-university) in
              computer security, because I served a cybersecurity unit during my
              conscription in the Singapore army. I found security
              vulnerabilities in software, and worked with relevant
              organisations to fix them. Examples include the{' '}
              <Link
                href="https://english.ncsc.nl/"
                className="font-semibold text-teal-500"
              >
                Dutch National Cyber Security Centre
              </Link>
              , Singapore&apos;s{' '}
              <Link
                href="https://www.mindef.gov.sg/"
                className="font-semibold text-teal-500"
              >
                Ministry of Defense
              </Link>
              , Singapore&apos;s{' '}
              <Link
                href="https://www.tech.gov.sg/"
                className="font-semibold text-teal-500"
              >
                Government Technology Agency
              </Link>
              ,{' '}
              <Link
                href="https://sg.yahoo.com/"
                className="font-semibold text-teal-500"
              >
                Yahoo!
              </Link>
              , and the maintainers of{' '}
              <Link
                href="https://nodejs.org/en"
                className="font-semibold text-teal-500"
              >
                Node.js
              </Link>
              . This got me invited to three private time-bound bug bounty
              events hosted by the government, each of which I ranked 🥇 1st in
              impact among global participants.
            </p>
            <p>
              In that time I did some in-depth security research into areas like{' '}
              <Link
                href="https://infosec.zeyu2001.com/2022/http-request-smuggling-in-the-multiverse-of-parsing-flaws"
                className="font-semibold text-teal-500"
              >
                HTTP request smuggling
              </Link>{' '}
              and{' '}
              <Link
                href="https://xsleaks.dev/"
                className="font-semibold text-teal-500"
              >
                XS-Leaks
              </Link>
              . Among other things, this earned me 15 credits in the CVE
              vulnerability database, and speaking engagements at conferences in
              the U.K. and Singapore.
            </p>
            <p>
              I also competed in Capture The Flag (CTF) competitions with{' '}
              <Link
                href="https://ctftime.org/team/205897/"
                className="font-semibold text-teal-500"
              >
                Blue Water
              </Link>
              , and placed 🥈 2nd in the{' '}
              <Link
                href="https://defcon.org/"
                className="font-semibold text-teal-500"
              >
                DEF CON
              </Link>{' '}
              CTF finals, the &quot;olympics of hacking&quot;, for two years in
              a row.
            </p>
            <p>
              I now work with{' '}
              <Link
                href="https://cure53.de/"
                className="font-semibold text-teal-500"
              >
                Cure53
              </Link>{' '}
              on a freelance basis, and study Computer Science full-time at the{' '}
              <Link
                href="https://www.cam.ac.uk/"
                className="font-semibold text-teal-500"
              >
                University of Cambridge
              </Link>
              . My summers have been spent at{' '}
              <Link
                href="https://open.gov.sg/"
                className="font-semibold text-teal-500"
              >
                Open Government Products
              </Link>{' '}
              and{' '}
              <Link
                href="https://www.tiktok.com/about"
                className="font-semibold text-teal-500"
              >
                TikTok
              </Link>
              , where I worked on solving security problems at scale.
            </p>
            <p>
              My interests now lie in building products that make a difference.
              My go-to hackathon stack is Next.js, Tailwind CSS, and Vercel,
              with which I&apos;ve won quite a few hackathons in London and
              Cambridge. I&apos;m currently building{' '}
              <Link
                className="font-semibold text-teal-500"
                href="https://eurekapad.app"
              >
                EurekaPad
              </Link>
              , a note-taking app for STEM students.
            </p>
            <p>
              Professionally, I&apos;m a full-stack developer with a passion for
              being as close to the product as possible. I&apos;m at my best
              when I work on meaningful problems that serve a clear purpose in
              the world.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <Resume />
          <ul className="mt-8">
            {notEmail.map(({ href, description, icon: Icon }, index) => (
              <SocialLink
                key={index}
                href={href}
                icon={Icon}
                className={index > 0 ? 'mt-4' : undefined}
              >
                {description}
              </SocialLink>
            ))}
            {email && (
              <SocialLink
                href={email.href}
                icon={email.icon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {email.description}
              </SocialLink>
            )}
          </ul>
        </div>
      </div>
    </Container>
  )
}
