import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

interface Props {
  products: ProductType[];
}

const FeaturedProducts: React.FC<Props> = ({ products }) => {
  return (
    <Carousel className=" mx-10  py-10" responsive={responsive} infinite={true}>
      {products.map((product) => (
        <div className="mx-3 rounded overflow-hidden shadow-lg hover:bg-blue-600 hover:text-white hover:ring hover:ring-blue-600 dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
          <img
            className="w-full"
            src={product.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="  ">{product.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default FeaturedProducts;
