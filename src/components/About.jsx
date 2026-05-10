'use client'
import ScrollReveal from './ScrollReveal'
import { FaMobileAlt } from "react-icons/fa";
import {
    FaDownload,
    FaEnvelope,
    FaLocationDot,
    FaCode,
} from 'react-icons/fa6'
import { motion } from 'framer-motion'
import Image from 'next/image';

const stats = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '3+', label: 'Certifications' },
    { value: '5+', label: 'Core Technologies' },
]

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-[#0F0F1A]">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
                {/* Subtitle */}
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
                            Get to know me
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
                            About
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Stats Row */}
                <ScrollReveal delay={100}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-12">
                        {stats.map(({ value, label }) => (
                            <div
                                key={label}
                                className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300"
                            >
                                <div className="text-3xl font-bold text-white">{value}</div>
                                <div className="text-xs text-gray-400 mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Main content: avatar + text */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left: Avatar, badge, resume button */}
                    <ScrollReveal delay={200} className="flex-shrink-0 flex flex-col items-center">
                        {/* Image wrapper with rotating border */}
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                            {/* Rotating border ring – uses arbitrary class to avoid config change */}
                            <div className="absolute inset-0 rounded-3xl animate-[spin_6s_linear_infinite] bg-gradient-to-r from-[#6C63FF] via-purple-500 to-pink-500 opacity-75 blur-sm" />
                            {/* Photo container */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-4 ring-[#0F0F1A] z-10">
                                <Image
                                    src="/MYProfpic.png"
                                    alt="Kawsar Hamid"
                                    height={1089}
                                    width={896}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating badge – now with a purple-blue theme matching buttons */}
                            <motion.div
                                animate={{ rotate: [0, 3, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-2 -right-2 z-20 bg-[#6C63FF]/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-[#6C63FF]/40 shadow-lg shadow-[#6C63FF]/20"
                            >
                                <p className="text-white text-xs font-semibold">Web Developer</p>
                            </motion.div>
                        </div>

                        {/* Resume button */}
                        <a
                            href="/Kawsar_Hamid_s_CV.pdf"
                            download
                            className="mt-6 inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5A52D5] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                        >
                            <FaDownload className="text-sm" />
                            View Resume
                        </a>
                    </ScrollReveal>

                    {/* Right: Bio + highlight cards */}
                    <div className="flex-1">
                        <ScrollReveal delay={300}>
                            <div className="mb-6">
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                                    Md Kawsar Hamid
                                </h3>
                                <p className="text-lg text-[#6C63FF] font-medium">
                                    Frontend Web Developer
                                </p>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                A passionate Frontend Web Developer dedicated to crafting elegant,
                                responsive web interfaces. With a strong foundation in the MERN stack
                                and Next.js, I turn complex ideas into intuitive digital experiences.
                                Always eager to learn and push boundaries, I focus on writing clean,
                                maintainable code and delivering high‑quality products that users love.
                            </p>

                            {/* Highlight Cards */}
                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center text-[#6C63FF]">
                                            <FaCode />
                                        </div>
                                        <h4 className="font-display font-bold text-white text-base">
                                            Frontend Development
                                        </h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Building responsive, pixel‑perfect interfaces using React, Next.js,
                                        and Tailwind CSS. Experienced in converting complex UI/UX designs
                                        into functional web applications.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center text-[#6C63FF]">
                                            <FaMobileAlt />
                                        </div>
                                        <h4 className="font-display font-bold text-white text-base">
                                            API & Performance
                                        </h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Skilled in integrating REST APIs, optimizing load times, and
                                        delivering smooth, scalable experiences across devices.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Location & email – centred below */}
                <ScrollReveal delay={400}>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <FaLocationDot className="text-[#6C63FF]" />
                            Khilkhet Moddopara, Dhaka, Bangladesh
                        </span>
                        <span className="flex items-center gap-2">
                            <FaEnvelope className="text-[#6C63FF]" />
                            mdkawsarnk78@gmail.com
                        </span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}