'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    emailjs
      .sendForm(
        'service_7apuzc8',
        'template_nniimfx',
        formRef.current,
        'Js6e5NR8W77Kdf_Nb'
      )
      .then(
        () => {
          setIsSubmitting(false)
          setSubmitStatus('success')
          formRef.current.reset()
          setTimeout(() => setSubmitStatus(null), 5000)
        },
        (error) => {
          console.error(error)
          setIsSubmitting(false)
          setSubmitStatus('error')
          setTimeout(() => setSubmitStatus(null), 5000)
        }
      )
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kashyapadhikari09@gmail.com',
      href: 'mailto:kashyapadhikari09@gmail.com',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+91) 7866942314',
      href: 'tel:+917866942314',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kalimpong, West Bengal',
      href: 'https://www.google.com/maps/place/Kalimpong,+West+Bengal',
      newTab: true,
      gradient: 'from-teal-500 to-teal-600',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 sm:py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                {...(info.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div
                  className={`shrink-0 p-3 bg-gradient-to-r ${info.gradient} rounded-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  <info.icon size={20} className="text-white" />
                </div>

                <div className="min-w-0">
                  <div className="text-gray-400 text-sm mb-0.5">{info.label}</div>
                  <div className="text-white font-medium break-all group-hover:text-gray-200 transition-colors">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800/50"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 resize-none outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium mt-4 bg-emerald-400/10 py-2.5 rounded-lg border border-emerald-400/20"
                >
                  <CheckCircle2 size={18} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-rose-400 text-sm font-medium mt-4 bg-rose-400/10 py-2.5 rounded-lg border border-rose-400/20"
                >
                  <XCircle size={18} />
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact