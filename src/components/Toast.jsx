import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const Toast = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const isSuccess = type === 'success'
  const bgColor = isSuccess ? 'bg-green-500' : 'bg-red-500'
  const icon = isSuccess ? faCheckCircle : faTimesCircle

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-24 right-5 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl z-50 flex items-center gap-4 min-w-[300px] max-w-[500px]`}
    >
      <FontAwesomeIcon icon={icon} size="lg" className="flex-shrink-0" />
      <p className="flex-1 font-medium">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
        aria-label="Close notification"
      >
        <FontAwesomeIcon icon={faTimes} size="sm" />
      </button>
    </motion.div>
  )
}

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-20 right-0 p-5 z-50 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto mb-3">
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { Toast, ToastContainer }
