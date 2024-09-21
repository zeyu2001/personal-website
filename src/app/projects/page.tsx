import { ChevronRight } from 'lucide-react'
import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Badge } from '@/components/ui/badge'
import imageAmbrose from '@/images/projects/ambrose.gif'
import imageEurekapad from '@/images/projects/eurekapad.png'
import imageMayBall from '@/images/projects/mayball.png'

import {
  AzureBadge,
  ChromeExtensionBadge,
  ClerkBadge,
  NextjsBadge,
  RadixBadge,
  ReactBadge,
  TailwindBadge,
  TypeScriptBadge,
  VercelBadge,
} from './badges'

interface FeaturedProject {
  name: string
  description: string
  link: { href: string; label: string }
  image: StaticImageData
  badges: React.ComponentType[]
}

interface Project {
  name: string
  description: string
  link: { href: string; label: string }
  hackathon?: boolean
  hackathonDetails?: string
}

const featured: FeaturedProject[] = [
  {
    name: 'EurekaPad',
    description: 'Notion + Jupyter Notebooks for STEM students. Supported by Microsoft for Startups.',
    link: { href: 'https://www.eurekapad.app', label: 'eurekapad.app' },
    image: imageEurekapad,
    badges: [NextjsBadge, TailwindBadge, RadixBadge, ClerkBadge, VercelBadge, AzureBadge],
  },
  {
    name: 'Hughes Hall May Ball',
    description: 'Website for the 2024 May Ball at Hughes Hall, University of Cambridge.',
    link: {
      href: 'https://hughesmayball24.vercel.app',
      label: 'hughesmayball.co.uk',
    },
    image: imageMayBall,
    badges: [ReactBadge, TailwindBadge, VercelBadge],
  },
  {
    name: 'Ambrose',
    description:
      'Chrome extension that answers trivia questions and reminds users of pending trivia quizzes in an online game. 1,200+ downloads.',
    link: { href: 'https://github.com/zeyu2001/Ambrose', label: 'GitHub' },
    image: imageAmbrose,
    badges: [TypeScriptBadge, ReactBadge, TailwindBadge, ChromeExtensionBadge],
  },
]

const projects: Project[] = [
  {
    name: 'Echo',
    description:
      'Social media aggregator that provides personalised feed for users to regain control of their social media algorithms.',
    link: { href: 'https://github.com/ECHO-LONDON/ECHO-Web', label: 'GitHub' },
    hackathon: true,
    hackathonDetails: '🥇 Most promising AI x Web3 build, 1st place @ Encode Club London AI Hackathon 2024',
  },
  {
    name: 'EduAble',
    description:
      'STEM notetaking app with real-time audio transcription to Markdown & LaTeX, and AI-generated summaries & quizzes.',
    link: { href: 'https://github.com/zeyu2001/EduAble', label: 'GitHub' },
    hackathon: true,
    hackathonDetails: '🥈 2nd place @ Cambridge Generative AI Hackathon 2024, Finalist @ Fitzelerate 2024',
  },
  {
    name: 'Zeno',
    description:
      'Security middleware for Express.js that protects against injection attacks, app-level DoS, SSRF and IDOR vulnerabilities.',
    link: { href: 'https://github.com/sebasyii/zeno', label: 'GitHub' },
    hackathon: true,
    hackathonDetails: 'Finalist @ STACK the Codes Hackathon 2022',
  },
]

function LinkIcon(props: Readonly<React.ComponentPropsWithoutRef<'svg'>>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Attempts to build things that matter.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Attempts to build things that matter."
      intro="Here are some of the projects I've worked on in my free time."
    >
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Card as="li" key={project.name}>
            <div className="card-wrapper">
              <div className="h-full-w-full card-content relative z-10 flex h-[200px] justify-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="aspect-auto rounded-xl bg-zinc-100 object-cover p-1 dark:bg-zinc-800 dark:p-0"
                />
              </div>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className="z-10 mt-6">
              {project.badges.map((Badge, index) => (
                <div key={index} className="m-1 inline-block">
                  <Badge />
                </div>
              ))}
            </div>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
      <h2 className="mt-16 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Honourable mentions</h2>
      <ul className="mt-6 divide-y divide-zinc-100 overflow-hidden dark:divide-zinc-800">
        {projects.map((project) => (
          <li
            key={project.name}
            className="group relative items-center justify-between gap-x-6 rounded-xl px-4 py-5 transition duration-200 hover:bg-zinc-100 md:flex dark:hover:bg-zinc-800"
          >
            <div className="flex gap-x-3">
              <Link href={project.link.href}>
                <span className="absolute inset-x-0 -top-px bottom-0" />
                <p className="text-sm font-semibold leading-6">{project.name}</p>
              </Link>
              <p className="whitespace-nowrap rounded-md bg-teal-50 px-1.5 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20 dark:bg-teal-900 dark:text-teal-50">
                Hackathon
              </p>
              <p className="flex gap-x-1 text-xs font-medium text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" /> {project.link.label}
              </p>
            </div>
            <div className="flex items-center justify-between gap-x-4 md:w-1/2 lg:w-2/3">
              <div className="mt-2 gap-x-2 space-y-1 text-xs leading-5">
                <p className="font-medium text-zinc-800 dark:text-zinc-100">{project.hackathonDetails}</p>
                <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
              </div>
              <div className="hidden text-zinc-400 group-hover:text-teal-500 md:flex">
                <ChevronRight />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
