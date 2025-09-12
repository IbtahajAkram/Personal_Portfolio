import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Index;
