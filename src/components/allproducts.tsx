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
        <div className="m-3 rounded overflow-hidden shadow-lg hover:bg-blue-600 hover:text-white hover:ring hover:ring-blue-600 dark:hover:ring-white transform duration-500 hover:scale-100 hover:shadow-xl">
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
    </div>
  );
};

export default AllProducts;
