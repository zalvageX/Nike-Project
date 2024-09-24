const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 relative sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] overflow-hidden
     shadow-3xl px-10 py-16 
      before:absolute before:inset-0 before:bg-[#f4f4f4] before:origin-top
        before:scale-y-0 before:transition before:duration-300 
        hover:before:scale-y-100 hover:before:ease-linear
     ">
        <div className="w-11 relative h-11 flex justify-center items-center bg-coral-red rounded-full z-10">
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className="mt-5 relative font-palanquin text-3xl leading-normal font-bold z-10">
            {label}
        </h3>
        <p className="relative mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray z-10">
            {subtext}

        </p>
    </div>
  )
}

export default ServiceCard