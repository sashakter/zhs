// src/components/Modal.tsx
import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
}

const ModalError: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded bg-gray-900 p-6 shadow-lg">
        <h2 className="text-xl font-bold text-red-500">Error</h2>
        <p className="mt-2 text-sm text-white">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ModalError
