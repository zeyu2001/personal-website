import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from '@/components/SocialIcons'

interface Socials {
  href: string
  description: string
  tooltip: string
  icon: React.ComponentType<{ className?: string }>
}

export const socials: Socials[] = [
  {
    href: 'https://github.com/zeyu2001',
    description: 'Follow on GitHub',
    tooltip: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/zhang-zeyu/',
    description: 'Follow on LinkedIn',
    tooltip: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://x.com/zeyu2001',
    description: 'Follow on X',
    tooltip: 'X',
    icon: XIcon,
  },
  {
    href: 'mailto:ping@analogue.computer',
    description: 'ping@analogue.computer',
    tooltip: 'Email',
    icon: MailIcon,
  },
]
