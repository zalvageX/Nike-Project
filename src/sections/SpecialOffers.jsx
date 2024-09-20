import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section id="special-offers" className="flex justify-wrap items-center max-xl:flex-col-reverse
     gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offers
        </h2>
        <p className="font-montserrat lg:max-w-lg info-text mt-4">
          Embark on a shopping journey that redefines yoyr experience with unbeatable 
          deals.From premier selections to incredible savings, we offer unparalleled 
          value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing
          the loftiest expectations. Your journey with us is nothing short but execeptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more"
          backgroundColor="bg-white" borderColor="border-coral-red" textColor="text-coral-red" />
        </div>
      </div>
    </section>
    
  )
}

export default SpecialOffers