import AllProducts from '../components/allproducts'
import Nav from '../components/nav';
import { productsArray } from '../data/products';

const ProductsPage = () => {
  return (
    <div>
        <Nav />
        <div className="text-4xl font-bold text-center my-4">All Products</div>
        <AllProducts products={productsArray} />
    </div>
  )
}

export default ProductsPage