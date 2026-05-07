'use client'
import ScrollReveal from './ScrollReveal'
import { FaFileAlt } from "react-icons/fa";

import {
    FaBriefcase,
    FaCode,
    FaLanguage,
    FaGraduationCap,
    FaFileExcel,
    FaFileWord,
    FaFilePowerpoint,
} from 'react-icons/fa6'


export default function Qualifications() {
    // Programming skills
    const technicalSkills = [
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MongoDB',
        'TypeScript',
        'Tailwind CSS',
        'DaisyUI',
    ]

    // Office / other skills
    const otherSkills = [
        { name: 'Excel', icon: FaFileExcel, color: 'text-green-400' },
        { name: 'Word', icon: FaFileWord, color: 'text-blue-400' },
        { name: 'PowerPoint', icon: FaFilePowerpoint, color: 'text-orange-400' },
        { name: 'LaTeX', icon: FaFileAlt, color: 'text-purple-400' },
    ]

    const languages = [
        { name: 'Bangla', level: 'Native' },
        { name: 'English', level: 'Professional' },
        { name: 'Hindi', level: 'Conversational' },
    ]

    return (
        <section id="qualifications" className="py-20 md:py-28 bg-[#0F0F1A]">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
                {/* Section Heading */}
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
                            Work Experience
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                            Experience & Skills
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            A blend of hands‑on industry experience, professional training, and a versatile tech toolkit.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Row 1: Experience + Skills */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Experience Card */}
                    <ScrollReveal delay={100}>
                        <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300 h-full">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#6C63FF] text-xl">
                                    <FaBriefcase />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-wider">
                                        Experience
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-white mt-1">
                                        Frontend Web Development Intern
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">9 AM Solution</p>
                                    <p className="text-gray-500 text-sm">Jan 2024 – Present</p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-3 text-gray-300 text-sm leading-relaxed">
                                <p>
                                    <span className="text-[#6C63FF] font-medium">▹ </span>
                                    Developed responsive UI components using React and Tailwind CSS.
                                </p>
                                <p>
                                    <span className="text-[#6C63FF] font-medium">▹ </span>
                                    Converted UI/UX designs into functional web interfaces.
                                </p>
                                <p>
                                    <span className="text-[#6C63FF] font-medium">▹ </span>
                                    Integrated REST APIs and improved application performance.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Skills Card */}
                    <ScrollReveal delay={200}>
                        <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300 h-full">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#6C63FF] text-xl">
                                    <FaCode />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-wider">
                                        Skills
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-white mt-1">
                                        Technical & Office Tools
                                    </h3>
                                </div>
                            </div>

                            {/* Programming Skills */}
                            <div className="mt-5">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Programming</h4>
                                <div className="flex flex-wrap gap-2">
                                    {technicalSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-full text-xs font-medium border border-white/10 hover:border-[#6C63FF]/40 hover:text-white transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Office / Other Skills */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Other Tools</h4>
                                <div className="flex flex-wrap gap-3">
                                    {otherSkills.map(({ name, icon: Icon, color }) => (
                                        <span
                                            key={name}
                                            className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-xs font-medium text-gray-300 border border-white/10 hover:border-[#6C63FF]/40 hover:text-white transition-all duration-300"
                                        >
                                            <Icon className={`text-base ${color}`} />
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaLanguage className="text-[#6C63FF] text-sm" />
                                    <span className="text-sm font-semibold text-gray-300">
                                        Languages
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {languages.map(({ name, level }) => (
                                        <li
                                            key={name}
                                            className="flex justify-between text-sm text-gray-400"
                                        >
                                            <span>{name}</span>
                                            <span className="text-[#6C63FF] bg-[#6C63FF]/10 px-2 py-0.5 rounded-full text-xs font-medium">
                                                {level}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Row 2: Professional Training (separate card) */}
                <ScrollReveal delay={300}>
                    <div className="max-w-3xl mx-auto">
                        <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#6C63FF] text-xl">
                                    <FaGraduationCap />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-wider">
                                        Professional Training
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-white mt-1">
                                        Programming Hero – MERN Stack
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Instructor: Jhankar Mahbub | Batch: 13 | ID: WEB13-1448
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-gray-300 text-sm leading-relaxed">
                                Completed a comprehensive full‑stack web development course covering the{' '}
                                <strong className="text-white">MERN stack</strong> (MongoDB, Express, React, Node.js).
                                The training included modern frontend frameworks like Next.js and TypeScript,
                                state management with Redux, API integration, authentication, and deployment
                                best practices. Built multiple real‑world projects and gained hands‑on experience
                                in building responsive, scalable web applications.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}