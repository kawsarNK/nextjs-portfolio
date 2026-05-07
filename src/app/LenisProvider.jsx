'use client'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }) {
    const lenisRef = useRef(null)

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        })

        lenisRef.current = lenis

        // Animation frame loop
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Intercept ALL anchor clicks with href starting with '#'
        function handleAnchorClick(e) {
            const target = e.target.closest('a[href^="#"]')
            if (!target) return

            const href = target.getAttribute('href')
            if (href === '#') return

            e.preventDefault()
            const id = href.substring(1)
            const element = document.getElementById(id)
            if (element) {
                // Offset to account for the fixed navbar height
                const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
                lenis.scrollTo(offsetTop, { offset: 0 })
            }
        }

        document.addEventListener('click', handleAnchorClick)

        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorClick)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}