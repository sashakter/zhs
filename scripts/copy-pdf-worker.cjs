// scripts/copy-pdf-worker.cjs
const fs = require('fs')
const path = require('path')

function exists(p) {
  try {
    return fs.existsSync(p)
  } catch {
    return false
  }
}

function findModuleRoot(modName, start) {
  // Ищем node_modules/<modName>/package.json, поднимаясь вверх
  let dir = start
  while (true) {
    const candidate = path.join(dir, 'node_modules', modName, 'package.json')
    if (exists(candidate)) return path.dirname(candidate)
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  return null
}

function resolvePdfjsRoot() {
  // 1) Прямо из корня проекта
  try {
    const pkg = require.resolve('pdfjs-dist/package.json', {
      paths: [process.cwd()],
    })
    return path.dirname(pkg)
  } catch {}

  // 2) Через react-pdf
  let reactPdfRoot = null
  try {
    const pkg = require.resolve('react-pdf/package.json', {
      paths: [process.cwd()],
    })
    reactPdfRoot = path.dirname(pkg)
  } catch {}

  if (!reactPdfRoot) return null

  // 2a) Вложенный pdfjs-dist у самого react-pdf
  const nested = path.join(
    reactPdfRoot,
    'node_modules',
    'pdfjs-dist',
    'package.json',
  )
  if (exists(nested)) return path.dirname(nested)

  // 2b) Поиск вверх от react-pdf
  const up = findModuleRoot('pdfjs-dist', reactPdfRoot)
  if (up) return up

  return null
}

const pdfjsRoot = resolvePdfjsRoot()

if (!pdfjsRoot) {
  console.warn(
    '[copy-pdf-worker] pdfjs-dist не найден ни напрямую, ни рядом с react-pdf.',
  )
  process.exit(0)
}

const candidates = [
  'build/pdf.worker.min.mjs',
  'build/pdf.worker.mjs',
  'build/pdf.worker.min.js',
  'build/pdf.worker.js',
  'legacy/build/pdf.worker.min.js',
  'legacy/build/pdf.worker.js',
].map((p) => path.join(pdfjsRoot, p))

let source = null
for (const p of candidates) {
  if (exists(p)) {
    source = p
    break
  }
}

if (!source) {
  console.warn('[copy-pdf-worker] Не удалось найти файл воркера в:', pdfjsRoot)
  process.exit(0)
}

const destDir = path.join(process.cwd(), 'public')
if (!exists(destDir)) fs.mkdirSync(destDir, { recursive: true })

// Кладём под оба имени, чтобы не зависеть от типа
const ext = path.extname(source) // .mjs или .js
const destMjs = path.join(destDir, 'pdf.worker.min.mjs')
const destJs = path.join(destDir, 'pdf.worker.min.js')
fs.copyFileSync(source, destMjs)
fs.copyFileSync(source, destJs)

console.log(`[copy-pdf-worker] OK:
  ${source}
-> ${destMjs}
-> ${destJs}`)
