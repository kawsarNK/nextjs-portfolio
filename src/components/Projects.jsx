'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { FaArrowRight, FaSearch } from 'react-icons/fa'

const projects = [
    {
        title: 'Tiles Gallery Website',
        description:
            'A full-stack dynamic gallery featuring a responsive UI, advanced search, and a secure authentication system with Google Sign-In and profile management.',
        tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Better Auth', 'MongoDB'],
        live: 'https://tiles-gallary-assignment8.vercel.app/',
        github: 'https://github.com/kawsarNK/tiles-gallary-assignment8',
        image: '/Tiles_gallary.png',
    },
    {
        title: 'KeenKeeper',
        description:
            'Relationship management application to track social interactions. Interactive UI with responsive design and efficient data handling.',
        tech: ['React', 'Tailwind CSS', 'GitHub REST API'],
        live: 'https://keenkeeper-friendship-keep-alive.netlify.app/',
        github: 'https://github.com/kawsarNK/KineKeeper-Assignment7',
        image: '/keenkepper.png',
    },
    {
        title: 'DigiTools',
        description:
            'Digital product marketplace with shopping cart functionality, real‑time notifications, and smooth UI interactions. Fully responsive.',
        tech: ['React', 'Tailwind CSS', 'GitHub REST API'],
        live: 'https://digitools-assignment6.netlify.app/',
        github: 'https://github.com/kawsarNK/Assignment6DigiToolsPlatform',
        image: '/Digitools.png',
    },
    {
        title: 'GitHub Issues Tracker',
        description:
            'Fetches real‑time data from GitHub REST API. Dynamic filtering by issue status and labels, fully responsive for all devices.',
        tech: ['JavaScript', 'GitHub REST API', 'Tailwind CSS'],
        live: 'https://kawsarnk.github.io/Assignment-5',
        github: 'https://github.com/kawsarNK/Assignment-5',
        image: '/github_issue_trcker.png',
    },
]

const allTechs = [...new Set(projects.flatMap((p) => p.tech))].sort()

export default function Projects() {
    const [search, setSearch] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered = projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase())
        const matchesFilter =
            activeFilter === 'All' || project.tech.includes(activeFilter)
        return matchesSearch && matchesFilter
    })

    return (
        <section id="projects" className="py-20 md:py-28 bg-[#0F0F1A]">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
                {/* Section Heading */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
                            My Work
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                            Recent Projects
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            A selection of projects that showcase my skills in the MERN stack and modern frontend tools.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Search & Filter Bar */}
                <ScrollReveal delay={100}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
                        <div className="relative w-full sm:max-w-sm">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search Portfolio"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-all duration-300"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                            <button
                                onClick={() => setActiveFilter('All')}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeFilter === 'All'
                                    ? 'bg-[#6C63FF] text-white shadow-lg shadow-indigo-500/20'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                All
                            </button>
                            {allTechs.map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => setActiveFilter(tech)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeFilter === tech
                                        ? 'bg-[#6C63FF] text-white shadow-lg shadow-indigo-500/20'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, idx) => (
                        <ScrollReveal key={project.title} delay={idx * 100}>
                            <div className="group card-hover bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Project Image */}
                                <div className="relative w-full h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            // Fallback gradient if image missing
                                            e.target.style.display = 'none'
                                            e.target.parentNode.style.background =
                                                'linear-gradient(135deg, #1e1b4b, #312e81)'
                                        }}
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-medium border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#6C63FF] transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#6C63FF] hover:text-indigo-400 text-sm font-semibold transition-colors group/live"
                                        >
                                            Live
                                            <FaArrowRight className="text-xs transition-transform group-hover/live:translate-x-1" />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white text-sm transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-lg">No projects match your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    )
}