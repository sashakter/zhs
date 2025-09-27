// src/app/components/PdfViewer.tsx
'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Используем JS-воркер для совместимости браузеров
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

type Props = { fileUrl: string }

export default function PdfViewer({ fileUrl }: Props) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // 1) Мемоизируем options и file — чтобы <Document /> не перезагружался
  const docOptions = useMemo(() => ({ isEvalSupported: false }), [])

  // строка и так стабильна, но можно явно завернуть в объект при желании:
  // const file = useMemo(() => ({ url: fileUrl }), [fileUrl])

  // Авто-подстройка ширины
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setContainerWidth(el.clientWidth))
    ro.observe(el)
    setContainerWidth(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const onLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n)
    setPageNumber((p) => Math.min(Math.max(1, p), n))
  }, [])

  const onDocError = useCallback((err: unknown) => {
    // Полезно, чтобы быстрее ловить проблему, если что-то с воркером
    console.error('PDF load error:', err)
  }, [])

  const goTo = useCallback(
    (p: number) => {
      if (!numPages) return
      const clamped = Math.max(1, Math.min(numPages, Math.floor(p)))
      setPageNumber(clamped)
    },
    [numPages],
  )

  const prev = useCallback(() => goTo(pageNumber - 1), [goTo, pageNumber])
  const next = useCallback(() => goTo(pageNumber + 1), [goTo, pageNumber])

  // Стрелки ←/→
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const pageWidth = useMemo(() => {
    if (!containerWidth) return undefined
    return Math.max(200, containerWidth - 24)
  }, [containerWidth])

  return (
    <div className="flex h-[100vh] w-full flex-col overflow-hidden">
      {/* Панель */}
      <div className="flex items-center justify-center gap-2 border-b border-white/20 bg-black/60 p-2 text-white">
        <button
          className="rounded border border-white/30 px-3 py-1 disabled:opacity-40"
          onClick={() => goTo(1)}
          disabled={pageNumber <= 1 || numPages === 0}
          title="First page"
        >
          ⏮
        </button>
        <button
          className="rounded border border-white/30 px-3 py-1 disabled:opacity-40"
          onClick={prev}
          disabled={pageNumber <= 1 || numPages === 0}
          title="Previous page"
        >
          ←
        </button>

        <span className="mx-2">
          Page{' '}
          <input
            type="number"
            min={1}
            max={Math.max(1, numPages)}
            value={pageNumber || 1}
            onChange={(e) => goTo(Number(e.target.value || 1))}
            className="w-16 rounded border border-white/30 bg-transparent px-2 py-1 text-center outline-none"
          />{' '}
          / {numPages || '—'}
        </span>

        <button
          className="rounded border border-white/30 px-3 py-1 disabled:opacity-40"
          onClick={next}
          disabled={pageNumber >= numPages || numPages === 0}
          title="Next page"
        >
          →
        </button>
        <button
          className="rounded border border-white/30 px-3 py-1 disabled:opacity-40"
          onClick={() => goTo(numPages)}
          disabled={pageNumber >= numPages || numPages === 0}
          title="Last page"
        >
          ⏭
        </button>
      </div>

      {/* Просмотр */}
      <div ref={wrapperRef} className="flex-1 overflow-auto bg-black p-3">
        <div className="flex justify-center">
          <Document
            file={fileUrl}
            options={docOptions}
            onLoadSuccess={onLoadSuccess}
            onLoadError={onDocError}
            loading={
              <div className="py-10 text-center text-white/70">
                Loading PDF…
              </div>
            }
            error={
              <div className="py-10 text-center text-red-300">
                Failed to load PDF
              </div>
            }
          >
            {/* ВАЖНО: не рендерим страницу до загрузки, чтобы избежать гонок с воркером */}
            {numPages > 0 && (
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderAnnotationLayer
                renderTextLayer
              />
            )}
          </Document>
        </div>
      </div>
    </div>
  )
}
