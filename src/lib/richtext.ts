// src/lib/richText.ts
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

marked.setOptions({
  gfm: true,
  breaks: true, // один \n -> <br>
})

export function renderRichText(source: string): string {
  if (!source) return ''
  const preprocessed = source.replace(/\n{3,}/g, (m) => {
    const extra = m.length - 2
    return '\n\n' + ('<br/>\n'.repeat(extra))
  })

  const raw = marked.parse(preprocessed) as string

  const clean = sanitizeHtml(raw, {
    allowedTags: [
      'p', 'br', 'strong', 'em', 'blockquote', 'code', 'pre',
      'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'hr', 'a'
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      code: ['class']
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'nofollow noopener noreferrer' }, true),
    },
  })

  return clean
}