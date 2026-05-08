'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload } from 'react-icons/fa6'

// ---------- Typewriter Hook ----------
function useTypewriter(words, period = 2000) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const currentWord = words[wordIndex % words.length]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1))
                setTypingSpeed(100)
                if (text.length + 1 === currentWord.length) {
                    setTypingSpeed(period)
                    setIsDeleting(true)
                }
            } else {
                setText(currentWord.substring(0, text.length - 1))
                setTypingSpeed(50)
                if (text.length === 0) {
                    setIsDeleting(false)
                    setWordIndex(wordIndex + 1)
                    setLoopNum(loopNum + 1)
                    setTypingSpeed(200)
                }
            }
        }, typingSpeed)
        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex, words, period, typingSpeed, loopNum])

    return { text }
}

// ---------- Hero Component ----------
export default function Hero() {
    const roles = ['Software Engineer', 'Frontend Developer', 'MERN Stack Developer']
    const { text: typedRole } = useTypewriter(roles, 1500)

    const waveVariants = {
        animate: {
            rotate: [0, 14, -8, 14, -4, 10, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-[#0F0F1A] overflow-hidden pt-20 md:pt-24"
        >
            {/* Background orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* ---------- IMAGE (first on mobile, right on desktop) ---------- */}
                    <div className="flex-1 flex justify-center lg:justify-end lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative w-64 h-64 sm:w-80 sm:h-80"
                        >
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6C63FF" />
                                        <stop offset="100%" stopColor="#F472B6" />
                                    </linearGradient>
                                </defs>
                                <motion.rect
                                    x="2"
                                    y="2"
                                    width="96"
                                    height="96"
                                    rx="12"
                                    fill="none"
                                    stroke="url(#borderGradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray="392"
                                    strokeDashoffset="392"
                                    animate={{ strokeDashoffset: [392, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                />
                            </svg>

                            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-4 ring-[#0F0F1A] z-10">
                                <img
                                    src="/myPic.jpeg"
                                    alt="Kawsar Hamid"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Top badge – moves right → left → right */}
                            <motion.div
                                animate={{ x: ['0%', '-100%', '0%'] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute top-0 right-0 z-30 bg-blue-900/10 backdrop-blur-xl rounded-2xl px-4 py-2 border-2 border-[#6C63FF]/50 shadow-lg"
                            >
                                <p className="text-blue-900 text-xs font-bold">10+ Projects</p>
                            </motion.div>

                            {/* Bottom badge – moves left → right → left */}
                            <motion.div
                                animate={{ x: ['0%', '100%', '0%'] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute bottom-0 left-0 z-30 bg-blue-900/10 backdrop-blur-xl rounded-2xl px-4 py-2 border-2 border-[#6C63FF]/50 shadow-lg"
                            >
                                <p className="text-white text-xs font-semibold">1.5+ Years Exp.</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ---------- TEXT ---------- */}
                    <div className="flex-1 text-center lg:text-left lg:order-1">
                        <motion.span
                            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Available for freelance
                        </motion.span>

                        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-2">
                            Hello There!
                            <motion.span
                                variants={waveVariants}
                                animate="animate"
                                className="inline-block ml-2 origin-bottom-right"
                            >
                                👋
                            </motion.span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Kawsar Hamid
                            </span>
                        </h1>

                        {/* Role typing line – centered on mobile, left-aligned on desktop */}
                        <div className="text-xl sm:text-2xl font-bold text-white mb-6 flex justify-center lg:justify-start">
                            <span>{typedRole}</span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                                className="text-[#6C63FF] ml-1"
                            >
                                |
                            </motion.span>
                        </div>

                        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            Dedicated Frontend Web Developer with a love for building pixel‑perfect,
                            responsive interfaces. Currently mastering Node.js,  Express.js & Mongo DB.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                            {['Frontend Developer', 'React Specialist', 'Next.js Expert'].map((role) => (
                                <span
                                    key={role}
                                    className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-200 border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
                                >
                                    {role}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5A52D5] text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40"
                            >
                                View My Projects
                                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="/Kawsar_Hamid_s_CV.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white px-7 py-3.5 rounded-full text-base font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <FaDownload className="text-sm" />
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}