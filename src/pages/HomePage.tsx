import "../App.css";
import Nav from "../components/nav";
import FeaturedProducts from "../components/featured";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { productsArray } from "../data/products";
import Service from "../components/services";

function HomePage() {
  //const navigate = useNavigate();

  return (
    <>
      <Nav />
      <main>
        <div className="text-4xl -mb-2 font-bold my-5 text-center text-transparent bg-clip-text bg-gradient-to-tr to-blue-600 from-purple-500">
          Featured Products
        </div>
        <FeaturedProducts products={productsArray} />
        <div className="mb-10">
          <div className="text-4xl font-bold my-5 text-center text-transparent bg-clip-text bg-gradient-to-tr to-blue-600 from-purple-500 ">
            About Us
          </div>
          <div className=" mx-10 lg:mx-28 md:mx-14 text-lg  text-center">
            We are a small business specializing in handmade crafts. Our
            products are made with love and care, and we take pride in the
            quality of our work. We believe in the power of handmade goods to
            bring joy and beauty into people's lives. Thank you for supporting
            our business.
          </div>
          <Service />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
