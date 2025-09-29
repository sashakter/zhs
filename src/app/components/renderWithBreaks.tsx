import React from 'react'

export function renderWithBreaks(input: string) {
  const normalized = input.replace(/\r\n/g, '\n').replace(/\\n/g, '\n')

  return normalized.split(/<br\s*\/?>|\n/gi).map((part, i, arr) =>
    i < arr.length - 1 ? (
      <React.Fragment key={i}>
        {part}
        <br />
      </React.Fragment>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  )
}
