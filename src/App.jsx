import './App.css'
import CTA from './components/CTA/Cta'
import CTA2 from './components/CTA2/Cta2'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero Section/Hero'
import Logo from './components/Logo/Logo'
import Metrics from './components/Metrics/Metrics'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Team from './components/Team/Team'
import Testimonial from './components/Testimonials/Testimonial'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Features/>
      <Metrics/>
      <CTA/>
      <Testimonial/>
      <Pricing/>
      <Team/>
      <CTA2/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
