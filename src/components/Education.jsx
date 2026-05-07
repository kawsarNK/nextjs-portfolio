'use client'
import ScrollReveal from './ScrollReveal'
import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
    {
        years: '2022 – 2026',
        institution: 'Green University of Bangladesh',
        degree: 'B.Sc. in Computer Science & Engineering',
        description: 'Focus on software development, algorithms, data structures, and system design.',
        gpa: '',
    },
    {
        years: '2017 – 2019',
        institution: 'Lalmai Govt. College',
        degree: 'Higher Secondary Certificate (HSC)',
        description: 'Completed higher secondary education in the Science Group, building foundation in Mathematics and Physics essential for engineering.',
        gpa: '3.42 / 5.00',
    },
    {
        years: '2017',
        institution: 'Premnol High School',
        degree: 'Secondary School Certificate (SSC)',
        description: 'Completed SSC from Science Group Achieved a strong academic, developing early interests in logical problem-solving and technical subjects.',
        gpa: '4.36 / 5.00',
    },
]

export default function Education() {
    return (
        <section id="education" className="py-20 md:py-28 bg-[#0F0F1A]">
            <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Section Heading */}
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
                            Education
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                            Academic Background
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            My educational journey that built the foundation for my tech career.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical line (visible on md+) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

                    <div className="space-y-12">
                        {educationData.map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div className={`relative flex items-center justify-between w-full mb-8 
                                    ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                    {/* Empty space for the other side (Desktop) */}
                                    <div className="hidden md:block w-[45%]" />

                                    {/* Dot on the center line (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#6C63FF] rounded-full border-4 border-[#0F0F1A] z-10 shadow-[0_0_10px_rgba(108,99,255,0.5)]" />

                                    {/* Content Card */}
                                    <div className="w-full md:w-[45%]">
                                        <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#6C63FF]/40 transition-all duration-300">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center text-[#6C63FF] flex-shrink-0">
                                                    <FaGraduationCap size={20} />
                                                </div>
                                                <div>
                                                    <h3 className="font-display font-bold text-white text-lg leading-tight">
                                                        {item.degree}
                                                    </h3>
                                                    <p className="text-[#6C63FF] text-sm mt-3">{item.institution}</p>
                                                </div>
                                            </div>

                                            {item.description && (
                                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                                    {item.description}
                                                </p>
                                            )}

                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-white font-medium">{item.years}</span>
                                                {item.gpa && (
                                                    <span className="text-[#6C63FF] font-semibold bg-[#6C63FF]/10 px-3 py-1 rounded-full">
                                                        GPA: {item.gpa}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}