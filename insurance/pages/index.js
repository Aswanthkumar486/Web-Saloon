import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import data from '../data/data.json'

export default function Home({ services, testimonials, footerData, contactData }) {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <ContactForm contactData={contactData} /> {/* ✅ Pass contactData */}
      <Footer footerData={footerData} />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      services: data.services,
      testimonials: data.testimonials,
      contactData: data.contact,   // ✅ Add contactData here
      footerData: data.footer      // ✅ Already included
    }
  }
}
