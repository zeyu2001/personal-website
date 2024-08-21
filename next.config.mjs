import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/blog/*': ['./src/app/blog/**/*.mdx'],
    },
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;  
    return config;
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
})

export default withMDX(nextConfig)
