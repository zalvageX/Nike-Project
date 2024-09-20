
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center
     max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className=" xl:whitespace-nowrap 
          relative z-10 pr-10">We Provide You</span>
          <br />
          <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="font-montserrat lg:max-w-lg info-text mt-4">
          Ensuring premium comfort and style, our meticulously crafted
         footwear is designed to elevate your experience, providing you with unmatched
         quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality