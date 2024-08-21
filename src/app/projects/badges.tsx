import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import {
  SiClerk,
  SiGooglechrome,
  SiMicrosoftazure,
  SiRadixui,
  SiReact,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

import { Badge } from '@/components/ui/badge'

export const NextjsBadge = () => (
  <Badge className="bg-slate-50 px-2 py-0 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50">
    <RiNextjsFill className="mr-2 h-3 w-3" />
    Next.js
  </Badge>
)

export const TailwindBadge = () => (
  <Badge className="bg-teal-50 px-2 py-0 text-teal-900 dark:border-teal-800 dark:bg-teal-900 dark:text-teal-50">
    <RiTailwindCssFill className="mr-2 h-3 w-3" />
    Tailwind
  </Badge>
)

export const ClerkBadge = () => (
  <Badge className="bg-zinc-50 px-2 py-0 text-violet-900 dark:border-violet-800 dark:bg-violet-900 dark:text-violet-50">
    <SiClerk className="mr-2 h-3 w-3" />
    Clerk
  </Badge>
)

export const RadixBadge = () => (
  <Badge className="bg-cyan-50 px-2 py-0 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-900 dark:text-cyan-50">
    <SiRadixui className="mr-2 h-3 w-3" />
    Radix UI
  </Badge>
)

export const VercelBadge = () => (
  <Badge className="bg-zinc-50 px-2 py-0 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
    <SiVercel className="mr-2 h-3 w-3" />
    Vercel
  </Badge>
)

export const AzureBadge = () => (
  <Badge className="bg-blue-50 px-2 py-0 text-blue-900 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-50">
    <SiMicrosoftazure className="mr-2 h-3 w-3" />
    Azure
  </Badge>
)

export const TypeScriptBadge = () => (
  <Badge className="bg-sky-50 px-2 py-0 text-sky-900 dark:border-sky-800 dark:bg-sky-900 dark:text-sky-50">
    <SiTypescript className="mr-2 h-3 w-3" />
    TypeScript
  </Badge>
)

export const ReactBadge = () => (
  <Badge className="bg-blue-100 px-2 py-0 text-blue-800 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100">
    <SiReact className="mr-2 h-3 w-3" />
    React
  </Badge>
)

export const ChromeExtensionBadge = () => (
  <Badge className="bg-emerald-50 px-2 py-0 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900 dark:text-emerald-50">
    <SiGooglechrome className="mr-2 h-3 w-3" />
    Extension
  </Badge>
)
