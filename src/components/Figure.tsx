import Image, { StaticImageData } from 'next/image'

import { cn } from '@/lib/utils'

export const Figure = ({
  src,
  alt,
  caption,
  width,
}: Readonly<{
  src: StaticImageData | string
  alt: string
  caption: string
  width?: 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4'
}>) => {
  return (
    <figure
      className={cn(
        'mx-auto',
        width === 'full' && 'w-full',
        width === '1/2' && 'w-1/2',
        width === '1/3' && 'w-1/3',
        width === '2/3' && 'w-2/3',
        width === '1/4' && 'w-1/4',
        width === '3/4' && 'w-3/4',
      )}
    >
      <Image src={src} alt={alt} />
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  )
}
