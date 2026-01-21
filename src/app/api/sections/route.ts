import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
  try {
    const baseUrl = process.env.CMS_PUBLIC_BASE_URL || 'http://localhost:3001'
    const token = process.env.CMS_READONLY_TOKEN

    const res = await fetch(`${baseUrl}/api/translate/main-page/reorder`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      next: { tags: ['sections'] },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch sections from CMS')
    }

    const sections = await res.json()
    return NextResponse.json(sections)
  } catch (error) {
    console.error('Error fetching sections:', error)
    return NextResponse.json({ error: 'Failed to fetch sections' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
      console.warn('[Sections API] Unauthorized PUT request')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('[Sections API] Revalidating sections cache')

    revalidateTag('sections')

    revalidatePath('/uk', 'layout')
    revalidatePath('/en', 'layout')
    revalidatePath('/', 'layout')

    console.log('[Sections API] ✓ Revalidation complete')

    return NextResponse.json({
      revalidated: true,
      message: 'Sections cache cleared successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('[Sections API] Error during revalidation:', error)
    return NextResponse.json({ error: 'Failed to update sections' }, { status: 500 })
  }
}
