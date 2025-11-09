import { NextResponse } from 'next/server'

const BASE = process.env.CMS_PUBLIC_BASE_URL!
const TOKEN = process.env.CMS_READONLY_TOKEN

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }

  try {
    const url = new URL(`/api/translate/brands/${id}`, BASE)
    const res = await fetch(url.toString(), {
      headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
      next: { revalidate: 600 }, // Cache for 10 minutes
    })

    if (!res.ok) {
      const errorText = await res.text()
      return NextResponse.json(
        { error: `CMS Error: ${res.status}`, details: errorText },
        { status: res.status },
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
