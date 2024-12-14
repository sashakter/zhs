'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

// Dynamically import PDFViewer to avoid SSR issues
const Worker = dynamic(
  () => import('@react-pdf-viewer/core').then((module) => module.Worker),
  { ssr: false },
)
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { Viewer } from '@react-pdf-viewer/core'

const PdfView: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPlugin()]} />
      </Worker>
    </div>
  )
}

export default PdfView
