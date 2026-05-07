import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import TechStack from '@/components/TechStack'
import Qualifications from '@/components/Qualifications'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Education />
                <TechStack />
                <Qualifications />
                {/* <Experience /> */}
                <Contact />
            </main>
            <Footer />
        </>
    )
}