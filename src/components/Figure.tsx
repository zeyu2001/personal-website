import Image, { StaticImageData } from 'next/image'

export const Figure = ({
  src,
  alt,
  caption,
}: Readonly<{
  src: StaticImageData | string
  alt: string
  caption: string
}>) => {
  return (
    <figure>
      <Image src={src} alt={alt} />
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  )
}
