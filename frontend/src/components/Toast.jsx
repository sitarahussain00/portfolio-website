import { useEffect } from 'react'
import { CheckCircle, X, AlertCircle } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [message, onClose])

  if (!message) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] animate-fade-in-up"
      role="alert"
      aria-live="polite"
    >
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-card border max-w-sm ${
          type === 'success'
            ? 'bg-ivory border-green-200 text-green-800'
            : 'bg-ivory border-red-200 text-red-800'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
        ) : (
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
        )}
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-warmBeige/60 transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
