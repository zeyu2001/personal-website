import '@/lib/promisePolyfill'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

export function Pdf({
  src,
  title,
  open,
  setOpen,
}: Readonly<{
  src: string
  title: string
  open: boolean
  setOpen: (open: boolean) => void
}>) {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageWidth, setPageWidth] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  useEffect(() => {
    const updateWidth = () => {
      if (!contentRef.current) return
      const width = contentRef.current?.offsetWidth
      if (width) {
        setPageWidth(width - 50)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [contentRef.current])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent ref={contentRef} className="max-w-[800px] gap-y-4">
        <DialogHeader>
          <div className="flex justify-between gap-y-2 text-left">
            <DialogTitle className="font-semibold text-zinc-800 dark:text-zinc-100 md:text-xl">
              {title}
            </DialogTitle>
            <Button
              onClick={() => {
                const link = document.createElement('a')
                link.href = src
                link.download = `${title}.pdf`
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              variant="secondary"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </DialogHeader>
        <div className="flex justify-center">
          <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={pageWidth} />
          </Document>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-md bg-transparent">
            <Button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              variant="transparent"
              className="hover:bg-transparent disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <p className="text-md font-medium text-zinc-800 dark:text-zinc-100">
              Page {pageNumber} of {numPages}
            </p>
            <Button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              variant="transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
