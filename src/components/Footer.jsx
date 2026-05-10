'use client'
import ScrollReveal from './ScrollReveal'
import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaDownload,
    FaGithub,
    FaLinkedinIn,
    FaFacebook,
} from 'react-icons/fa6'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-[#0a0a14] border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* 
                   Change: Switched from Flex to Grid 
                   grid-cols-1: Mobile (default)
                   md:grid-cols-2: Tablet (min-width: 768px)
                   lg:grid-cols-4: Desktop (min-width: 1024px)
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-x-16 md:gap-y-10">

                    {/* Column 1: Brand */}
                    <ScrollReveal className="w-full">
                        <div>
                            <a href="#hero" className="text-2xl font-bold text-white">
                                Kawsar<span className="text-[#6C63FF]">.</span>dev
                            </a>
                            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                Frontend Web Developer specializing in the MERN stack, Next.js, and
                                responsive UI. Building secure, scalable web solutions for clients
                                worldwide.
                            </p>
                            <div className="flex gap-3 mt-4">
                                <a
                                    href="https://www.linkedin.com/in/kawsar-hamid-web-dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#6C63FF] transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn size={16} />
                                </a>
                                <a
                                    href="https://www.facebook.com/nilakasertara.kawsar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#6C63FF] transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={16} />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Column 2: Navigation */}
                    <ScrollReveal delay={100} className="w-full">
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Navigation
                            </h3>
                            <ul className="space-y-2.5">
                                {[
                                    { label: 'Home', href: '#hero' },
                                    { label: 'About', href: '#about' },
                                    { label: 'Projects', href: '#projects' },
                                    { label: 'Education', href: '#education' },
                                    { label: 'Experience & Skills', href: '#qualifications' },
                                    { label: 'Contact', href: '#contact' },
                                ].map(({ label, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            className="text-gray-400 hover:text-[#6C63FF] transition-colors text-sm"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Column 3: Contact */}
                    <ScrollReveal delay={200} className="w-full">
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Contact
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <FaEnvelope className="text-[#6C63FF] mt-0.5 flex-shrink-0" />
                                    <span>
                                        <span className="block text-xs text-gray-500 uppercase">Email</span>
                                        <a
                                            href="mailto:mdkawsarnk78@gmail.com"
                                            className="hover:text-[#6C63FF] transition-colors break-all"
                                        >
                                            mdkawsarnk78@gmail.com
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <FaPhone className="text-[#6C63FF] mt-0.5 flex-shrink-0" />
                                    <span>
                                        <span className="block text-xs text-gray-500 uppercase">Phone</span>
                                        <a
                                            href="tel:+8801601532640"
                                            className="hover:text-[#6C63FF] transition-colors"
                                        >
                                            +880 1601-532640
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <FaLocationDot className="text-[#6C63FF] mt-0.5 flex-shrink-0" />
                                    <span>
                                        <span className="block text-xs text-gray-500 uppercase">Location</span>
                                        <span>Khilkhet Moddopara, Dhaka</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Column 4: Resources */}
                    <ScrollReveal delay={300} className="w-full">
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/Kawsar_Hamid_s_CV.pdf"
                                        download
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        <FaDownload className="text-[#6C63FF]" />
                                        <span>
                                            <span className="block">Resume</span>
                                            <span className="block text-xs text-gray-500">Download PDF</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/kawsarNK"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        <FaGithub className="text-[#6C63FF]" />
                                        <span>
                                            <span className="block">GitHub</span>
                                            <span className="block text-xs text-gray-500">View Repositories</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 py-6">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p className="text-center sm:text-left">&copy; {year} Kawsar Hamid. All rights reserved.</p>
                    <p className="text-center sm:text-right">
                        Built with{' '}
                        <span className="text-[#6C63FF]">Next.js</span> &{' '}
                        <span className="text-[#06b6d4]">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}