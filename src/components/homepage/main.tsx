import {Jumbotron} from '@/components/homepage/jumbotron'
import { CompanyOverview } from './overview';
import { ProductOverview } from './productover';
import { Testimonials } from './testimonial';

export function Homepage () {
  return (
    <div>
      <Jumbotron/>
      <CompanyOverview/>
      <ProductOverview/>
      <Testimonials/>
    </div>
  );
}
