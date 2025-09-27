'use client'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import React from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.worker.min.js`

export default function PdfSimple({ fileUrl }: { fileUrl: string }) {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
      <Document file={fileUrl} options={{ isEvalSupported: false }}>
        <Page pageNumber={1} width={900} />
      </Document>
    </div>
  )
}
