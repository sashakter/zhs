export interface Section {
  id: string
  key: string
  position: number
  isVisible: boolean
}

export async function getSections(): Promise<Section[]> {
  try {
    const baseUrl = process.env.CMS_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/translate/main-page/reorder`, {
      next: { tags: ['sections'] }, 
    })

    if (!res.ok) {
      throw new Error('Failed to fetch sections')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching sections:', error)
    return [
      { id: '1', key: 'hero', position: 0, isVisible: true },
      { id: '2', key: 'about', position: 1, isVisible: true },
      { id: '3', key: 'brands', position: 2, isVisible: true },
      { id: '4', key: 'capabilities', position: 3, isVisible: true },
      { id: '5', key: 'partners', position: 4, isVisible: true },
    ]
  }
}
