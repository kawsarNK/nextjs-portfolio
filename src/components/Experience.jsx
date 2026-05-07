import ScrollReveal from './ScrollReveal'
import { FaTrophy } from 'react-icons/fa6'

const experiences = [
    {
        company: 'Company A',
        role: 'Software Engineer',
        period: 'Jan 2022 — Present',
        description:
            'Lead front-end development for a SaaS platform serving 50K+ users. Architected component libraries and mentored junior developers.',
        skills: ['React', 'TypeScript', 'GraphQL', 'AWS'],
        achievement: 'Led redesign increasing user retention by 35%',
        color: 'text-brand-600',
        border: 'border-l-brand-600',
    },
    {
        company: 'Company B',
        role: 'Product Manager',
        period: 'Jun 2020 — Dec 2021',
        description:
            'Managed a cross-functional team to deliver a mobile-first product. Defined roadmap, conducted user research, and increased feature adoption by 28%.',
        skills: ['Figma', 'Jira', 'User Research', 'Agile'],
        achievement: 'Shipped 3 major features ahead of schedule',
        color: 'text-purple-600',
        border: 'border-l-purple-600',
    },
    {
        company: 'Freelance',
        role: 'UI/UX Designer',
        period: '2018 — 2020',
        description:
            'Designed and developed websites and web apps for small businesses and startups. Worked directly with clients to bring their visions to life.',
        skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'Sketch'],
        achievement: 'Built 15+ client websites with 100% satisfaction rate',
        color: 'text-emerald-600',
        border: 'border-l-emerald-600',
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest">Work Experience</span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                            Where I&rsquo;ve Worked
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            A journey through the companies and projects that shaped my career.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 ml-5 md:ml-0" />

                    {experiences.map((exp, idx) => (
                        <div key={idx} className="timeline-item relative pl-14 md:pl-20 pb-14">
                            <ScrollReveal delay={idx * 100}>
                                <div className="card-hover bg-surface-light rounded-2xl p-6 sm:p-8 border border-gray-100">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div>
                                            <span className={`text-xs font-semibold uppercase tracking-wider ${exp.color}`}>
                                                {exp.company}
                                            </span>
                                            <h3 className="font-display text-xl font-bold text-gray-900 mt-1">{exp.role}</h3>
                                        </div>
                                        <span className="text-sm text-gray-400 bg-white px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white text-gray-600 rounded-full text-xs font-medium border border-gray-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={`flex items-center gap-2 text-sm font-medium ${exp.color}`}>
                                        <FaTrophy className="text-xs" />
                                        <span>Achievement: {exp.achievement}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}