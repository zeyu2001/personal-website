'use client'

import { useState } from 'react'

import { Card } from '@/components/Card'

import { Pdf } from './pdf'

export function Appearance({
  title,
  description,
  event,
  cta,
  href,
  pdfLink,
}: Readonly<{
  title: string
  description: string
  event: string
  cta: string
  href?: string
  pdfLink?: string
}>) {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(true)
  }

  return (
    <Card as="article">
      {!href && pdfLink ? (
        <Card.Title as="h3" href={href} onClick={onClick}>
          {title}
        </Card.Title>
      ) : (
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
      )}

      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
      {!href && pdfLink && <Pdf src={pdfLink} title={title} open={open} setOpen={setOpen} />}
    </Card>
  )
}
