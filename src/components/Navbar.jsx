'use client'
import { useState, useEffect, useRef } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Experience & Skills', href: '#qualifications' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${scrolled
                ? 'shadow-md bg-white border-b border-gray-100'
                : 'bg-white border-b border-gray-100'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo – always dark for visibility */}
                    <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                        Kawsar.Dev
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-sm font-medium text-gray-600 hover:text-[#6C63FF] transition-colors relative group"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5A52D5] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                        >
                            Let&rsquo;s Talk
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-gray-700 p-2"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-5 py-4 flex flex-col gap-3">
                            {links.map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-600 hover:text-[#6C63FF] py-2 text-base font-medium"
                                >
                                    {label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="mt-2 inline-flex items-center justify-center bg-[#6C63FF] hover:bg-[#5A52D5] text-white px-5 py-3 rounded-full text-sm font-semibold"
                            >
                                Let&rsquo;s Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}