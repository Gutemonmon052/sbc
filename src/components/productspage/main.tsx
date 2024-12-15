import { ProductsList } from './productslist';
import { TestimoniProduct } from './testimoniprd';


export function ProductsPage () {
  return (
    <div className="productpage">
      <ProductsList/>
      <TestimoniProduct/>
    </div>
  );
}
