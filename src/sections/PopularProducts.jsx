import { useGSAP } from '@gsap/react';
import PopularProductsCard from '../components/PopularProductsCard'
import { products } from "../constants";
import { animateWithGsap } from '../../utils/animation';

const PopularProducts = () => {

  useGSAP(() => {
  
    animateWithGsap('#pp_text', 
      {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1, stagger: 0.2}
  )
  }, []);

  return (

    <section id="products" className="max-container max-sm::mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 id='pp_text' className="text-4xl font-palaquin font-bold opacity-0 translate-y-10">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p id='pp_text' className="lg:max-w-lg mt-2 font-montserrat text-slate-gray opacity-0 translate-y-10">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
       grid-cols-1 sm:gap-4 gap-14">
        {products.map((products) => (
          <PopularProductsCard key=
          {products.name} {...products} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts