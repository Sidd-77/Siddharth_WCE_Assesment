import "../App.css";
import Nav from "../components/nav";
import FeaturedProducts from "../components/featured";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { productsArray } from "../data/products";


function HomePage() {
  //const navigate = useNavigate();

  return (
    <>
      <Nav />
      <main>
        <div className="text-4xl font-bold text-center my-4">
          Featured Products
        </div>
        <FeaturedProducts products={productsArray} />
        <div className="mb-10">
          <div className="text-4xl font-bold text-center my-4">About Us</div>
          <div className=" mx-10 lg:mx-28 md:mx-14 text-center">
            We are a small business specializing in handmade crafts. Our
            products are made with love and care, and we take pride in the
            quality of our work. We believe in the power of handmade goods to
            bring joy and beauty into people's lives. Thank you for supporting
            our business.
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
