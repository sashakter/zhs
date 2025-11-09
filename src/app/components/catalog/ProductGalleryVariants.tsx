"use client"

import Image from "next/image"
import { useMemo, useRef, useState } from "react"
import { Link } from "@/src/navigation"
import { renderRichText } from "@/src/lib/richtext"

export type GalleryItem = { url: string; alt?: string | null; width?: number | null; height?: number | null }
export type VariantItem = {
  id: string
  label?: string | null
  volumeMl?: number | null
  image?: { url: string; alt?: string | null; width?: number | null; height?: number | null } | null
}

interface Props {
  name: string
  brandName: string
  brandSlug: string
  description?: string | null
  gallery: GalleryItem[]
  variants?: VariantItem[] | null
  locale?: string
}

export default function ProductGalleryVariants({
  name,
  brandName,
  brandSlug,
  description,
  gallery,
  variants = [],
  locale = 'uk',
}: Props) {
  const initial = gallery?.[0]
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(initial ?? null)
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [lensVisible, setLensVisible] = useState(false)
  const [lensStyle, setLensStyle] = useState<React.CSSProperties>({})

  const LENS_SIZE = 160 // px
  const ZOOM = 2.2

  const thumbs = useMemo(() => (gallery?.length ? gallery.slice(1, 5) : []), [gallery])

  function onVariantClick(v: VariantItem) {
    setSelectedVariantId(v.id)
    if (v.image?.url) {
      setSelectedImage({ url: v.image.url, alt: v.image.alt ?? name, width: v.image.width ?? null, height: v.image.height ?? null })
    } else if (initial) {
      setSelectedImage(initial)
    }
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current || !selectedImage) return
    const rect = containerRef.current.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top

    const iw = selectedImage.width ?? null
    const ih = selectedImage.height ?? null
    const aspect = iw && ih ? iw / ih : rect.width / rect.height

    let renderW: number, renderH: number, offsetLeft: number, offsetTop: number
    if (rect.width / rect.height < aspect) {
      renderW = rect.width
      renderH = rect.width / aspect
      offsetLeft = 0
      offsetTop = (rect.height - renderH) / 2
    } else {
      renderH = rect.height
      renderW = rect.height * aspect
      offsetTop = 0
      offsetLeft = (rect.width - renderW) / 2
    }

    const xr = Math.max(0, Math.min(cx - offsetLeft, renderW))
    const yr = Math.max(0, Math.min(cy - offsetTop, renderH))

    const left = cx - LENS_SIZE / 2
    const top = cy - LENS_SIZE / 2

    const backgroundSize = `${renderW * ZOOM}px ${renderH * ZOOM}px`
    const backgroundPosition = `${-(xr * ZOOM) + LENS_SIZE / 2}px ${-(yr * ZOOM) + LENS_SIZE / 2}px`

    setLensStyle({
      position: "absolute",
      left,
      top,
      width: LENS_SIZE,
      height: LENS_SIZE,
      backgroundImage: `url(${selectedImage.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize,
      backgroundPosition,
      borderRadius: "9999px",
      boxShadow: "0 0 0 2px rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.6)",
      pointerEvents: "none",
      zIndex: 10,
    })
  }

  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      <div>
        <div
          ref={containerRef}
          className="relative aspect-[2/3] overflow-hidden rounded-xl border border-neutral-800 bg-black"
          onMouseMove={onMouseMove}
          onMouseEnter={() => setLensVisible(true)}
          onMouseLeave={() => setLensVisible(false)}
        >
          {selectedImage?.url ? (
            <Image
              key={selectedImage.url}
              src={selectedImage.url}
              alt={selectedImage.alt || name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-900">No image</div>
          )}
          {lensVisible && selectedImage?.url ? (
            <div style={lensStyle} />
          ) : null}
        </div>
        {thumbs.length > 0 && (
          <div className="mt-4 grid grid-cols-5 gap-3">
            {thumbs.map((g, i) => (
              <button
                type="button"
                key={`${g.url}-${i}`}
                className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                onClick={() => setSelectedImage(g)}
              >
                <Image src={g.url} alt={g.alt || name} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-semibold">{name}</h1>

        {variants && variants.length > 0 ? (
          <div className="mt-6">
            <h2 className="mb-2 text-sm tracking-wider text-neutral-400">{locale === 'en' ? 'Volume' : 'Обʼєм'}</h2>
            <ul className="flex flex-wrap gap-2">
              {variants.map((v) => {
                const label = v.label || (v.volumeMl ? `${v.volumeMl} ${locale === 'en' ? 'ml' : 'мл'}` : (locale === 'en' ? 'Variant' : 'Варіант'))
                const isActive = selectedVariantId === v.id
                return (
                  <li key={v.id}>
                    <button
                      type="button"
                      onClick={() => onVariantClick(v)}
                      className={[
                        "rounded-lg border px-3 py-1 text-sm transition-colors",
                        isActive
                          ? "border-white bg-neutral-800 text-white"
                          : "border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800",
                      ].join(" ")}
                    >
                      {label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}

        {description ? (
          <div
            className="prose prose-invert mt-6 max-w-none whitespace-pre-wrap text-neutral-300"
            dangerouslySetInnerHTML={{ __html: renderRichText(description) }}
          />
        ) : null}

        <div className="mt-8">
          <Link href={`/brands/${brandSlug}` as any} className="text-neutral-300 underline hover:text-white">
            {locale === 'en' ? 'To brand:' : 'До бренду:'} {brandName}
          </Link>
        </div>
      </div>
    </div>
  )
}
