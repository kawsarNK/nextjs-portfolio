'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import {
    FaEnvelope,
    FaWhatsapp,
    FaPaperPlane,
    FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Contact() {
    const [feedback, setFeedback] = useState({ msg: '', type: '' })
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const message = form.message.value.trim()

        if (!name || !email || !message) {
            setFeedback({ msg: 'Please fill in all required fields.', type: 'error' })
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFeedback({ msg: 'Please enter a valid email address.', type: 'error' })
            return
        }

        setSending(true)
        setFeedback({ msg: '', type: '' })

        //     // Simulate API call
        //     setTimeout(() => {
        //         setFeedback({
        //             msg: '✅ Message sent successfully! I’ll get back to you soon.',
        //             type: 'success',
        //         })
        //         form.reset()
        //         setSending(false)
        //         setTimeout(() => setFeedback({ msg: '', type: '' }), 5000)
        //     }, 1500)
        // }
        // ---- Send to Web3Forms ----
        const formData = new FormData()
        formData.append('access_key', '3a704c30-2a6d-4958-92d7-9f387d2d8b3f')
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', form.subject.value || 'New message from portfolio')
        formData.append('message', message)

        try {
            const response = await fetch('v', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()
            if (data.success) {
                setFeedback({ msg: '✅ Message sent! I’ll get back to you soon.', type: 'success' })
                form.reset()
            } else {
                setFeedback({ msg: '❌ Something went wrong. Please try again.', type: 'error' })
            }
        } catch (error) {
            setFeedback({ msg: '❌ Network error. Please try again later.', type: 'error' })
        } finally {
            setSending(false)
            setTimeout(() => setFeedback({ msg: '', type: '' }), 5000)
        }
    }

    return (
        <section id="contact" className="py-20 md:py-28 bg-[#0F0F1A] relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
                {/* Top area: heading + CTA buttons */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
                            Get in touch
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
                            Let&rsquo;s build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                together
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                            Whether you need a fintech platform, ERP system, or AI‑powered automation workflow —
                            I&rsquo;m available for new projects. Let&rsquo;s discuss your vision.
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <a
                                href="mailto:mdkawsarnk78@gmail.com"
                                className="group inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5A52D5] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                            >
                                <FaEnvelope className="text-sm" />
                                Send an Email
                            </a>
                            <a
                                href="https://wa.me/8801601532640"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
                            >
                                <FaWhatsapp className="text-sm" />
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Lower area: contact form */}
                <ScrollReveal delay={150}>
                    <div className="max-w-2xl mx-auto">
                        <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] transition-all duration-300"
                                        placeholder="Project inquiry"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full btn-glow bg-[#6C63FF] hover:bg-[#5A52D5] text-white py-3.5 rounded-xl text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-70 transition-all duration-300"
                                >
                                    {sending ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message <FaPaperPlane className="text-sm" />
                                        </>
                                    )}
                                </button>
                                {feedback.msg && (
                                    <p
                                        className={`text-center text-sm ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'
                                            }`}
                                    >
                                        {feedback.msg}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Micro details (optional) */}
                <ScrollReveal delay={250}>
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                            <FaEnvelope className="text-[#6C63FF]" />
                            mdkawsarnk78@gmail.com
                        </span>
                        <span className="flex items-center gap-2">
                            <FaWhatsapp className="text-green-400" />
                            +880 1601-532640
                        </span>
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-red-400" />
                            Dhaka, Bangladesh
                        </span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}