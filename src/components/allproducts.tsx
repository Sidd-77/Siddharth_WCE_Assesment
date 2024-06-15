import { Card, CardHeader, Image, CardBody } from "@nextui-org/react";
import React from "react";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

interface Props {
  products: ProductType[];
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
      {products.map((product) => (
        <Card key={product.id} shadow="lg" className="p-2 " isHoverable={true}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={product.image}
            />
          </CardHeader>

          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-large">{product.name}</h4>
            <p className=" ">{product.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default AllProducts;
