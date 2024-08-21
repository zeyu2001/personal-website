import { TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import React from 'react'

import { socials } from '@/app/config/socials'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const SocialLink = React.forwardRef(function SocialLink(
  {
    icon: Icon,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
  },
  forwardedRef: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Link className="group -m-1 p-1" {...props} ref={forwardedRef}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
})

export const Socials = () => (
  <div className="mt-6 flex gap-6">
    {socials.map(({ href, description, tooltip, icon: Icon }, index) => (
      <Tooltip key={index}>
        <TooltipTrigger asChild>
          <SocialLink href={href} aria-label={description} icon={Icon} />
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={4}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
)
