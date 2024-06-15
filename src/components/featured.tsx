import { Card, CardHeader, Image, CardBody } from "@nextui-org/react";
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
    items: 3,
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
    <Carousel className="bg-white mb-10" responsive={responsive} infinite={true}>
      {products.map((product) => (
        <Card key={product.id} shadow="none" className="p-2 m-1 transition hover:bg-blue-200 hover:duration-700 hover:ease-in" isHoverable={false}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={product.image}
            />
          </CardHeader>

          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-large">{product.name}</h4>
            <p className="">
              {product.description}
            </p>
          </CardBody>
        </Card>
      ))}
    </Carousel>
  );
};

export default FeaturedProducts;
