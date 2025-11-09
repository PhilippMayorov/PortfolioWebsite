import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { ToastContainer } from './Toast'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faPaperPlane,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [toasts, setToasts] = useState([])

  const addToast = (message, type) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
  }

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Debug: Log environment variables (remove in production)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Philipp Mayorov',
          from_email: form.email,
          to_email: 'philipp.mayorov04@gmail.com',
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          addToast(
            'Thank you! I will get back to you as soon as possible.',
            'success'
          )

          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error('EmailJS Error:', error)

          addToast('Oops! Something went wrong. Please try again.', 'error')
        }
      )
  }

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Have a world changing idea?</p>
          <h3 className={styles.sectionHeadText}>Get in Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                <FontAwesomeIcon
                  icon={faUser}
                  size="1x"
                  style={{ color: '#915EFF' }}
                />{' '}
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  style={{ color: '#915EFF' }}
                />{' '}
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="1x"
                  style={{ color: '#915EFF' }}
                />{' '}
                Subject
              </span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's the subject of your message?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                <FontAwesomeIcon
                  icon={faComment}
                  size="1x"
                  style={{ color: '#915EFF' }}
                />{' '}
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>

          <div className="mt-8">
            <p className="text-center" style={{ color: '#7C7E80' }}>
              Or connect with me on: <br />
              <a
                href="https://www.linkedin.com/in/philipp-mayorov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> LinkedIn - Philipp Mayorov</strong>
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
