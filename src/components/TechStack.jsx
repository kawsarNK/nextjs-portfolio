'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaLock,
} from 'react-icons/fa6'
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiMongodb,
    SiExpress,
    SiShadcnui,
    SiGithub,
    SiMysql,
} from 'react-icons/si'
import { TbBrandGolang } from 'react-icons/tb'
import { FiLayers } from 'react-icons/fi'
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiVercelLine } from "react-icons/ri";

const tabs = ['Frontend', 'Backend', 'DevOps & Tools']

const techData = {
    Frontend: [
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'Shadcn UI', icon: SiShadcnui, color: 'text-gray-300' },
        { name: 'GSAP', icon: TbBrandGolang, color: 'text-green-400' },
        { name: 'DaisyUI', icon: FiLayers, color: 'text-pink-400' },
    ],
    Backend: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-300' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
        { name: 'JWT', icon: FaLock, color: 'text-purple-400' },
    ],
    'DevOps & Tools': [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
        { name: 'GitHub', icon: SiGithub, color: 'text-white' },
        { name: 'VS Code', icon: VscVscodeInsiders, color: 'text-blue-400' },
        { name: 'Vercel', icon: RiVercelLine, color: 'text-white' },

    ],
}

export default function TechStack() {
    const [activeTab, setActiveTab] = useState('Frontend')

    return (
        <section id="tech-stack" className="py-20 md:py-28 bg-[#0F0F1A]">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
                            My Tech Stack
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                            Tools & Technologies
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Tools and technologies I use to build fast, secure, production‑grade applications.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="flex justify-center gap-2 sm:gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                    ? 'bg-[#6C63FF] text-white shadow-lg shadow-indigo-500/20'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                    {techData[activeTab].map(({ name, icon: Icon, color }, idx) => (
                        <ScrollReveal key={name} delay={idx * 50}>
                            <div className="group card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl ${color} bg-white/5`}>
                                    <Icon />
                                </div>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {name}
                                </span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}