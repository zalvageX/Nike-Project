import { star } from "../assets/icons"

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex items-center flex-col w-full max-sm:w-full rounded-xl hover:duration-500 hover:shadow-lg hover:text-white
     hover:bg-white transition-transform hover:ring-slate-900/5 hover:-translate-y-2 overflow-hidden
        before:absolute before:inset-0 before:bg-[#D8DFE5] before:origin-bottom
        before:scale-y-0 before:transition before:duration-300 
        hover:before:scale-y-100 hover:before:ease-linear
    ">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]  z-10"/>
        <div className="mt-6 flex justify-start gap-2.5  z-10">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
            </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin  z-10">
            {name}
        </h3>
        <p className="mt-2 mb-2 font-semibold font-montserrat text-coral-red 
            text-2xl leading-normal  z-10">
            {price}
        </p>
    </div>
  )
}

export default PopularProductsCard