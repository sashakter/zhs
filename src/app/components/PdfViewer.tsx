'use client'

import dynamic from 'next/dynamic'
import { Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const Viewer = dynamic(
  () => import('@react-pdf-viewer/core').then((m) => m.Viewer),
  { ssr: false },
)

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
  const layout = defaultLayoutPlugin()

  const workerUrl = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString()
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Worker workerUrl={workerUrl}>
        <Viewer fileUrl={fileUrl} plugins={[layout]} />
      </Worker>
    </div>
  )
}
