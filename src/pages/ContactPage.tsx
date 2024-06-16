import Contact from "../components/contact"
import Nav from '../components/nav';
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Nav />
        <Contact />
        <div className="flex-grow">
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage