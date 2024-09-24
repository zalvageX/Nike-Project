
import { useGSAP } from "@gsap/react"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import { animateWithGsap } from "../../utils/animation"

const SuperQuality = () => {
  useGSAP(() => {
    
    animateWithGsap('#g_text', 
      {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1, stagger: 0.2}
    )
    animateWithGsap('#sq_image', 
    {x: 0, scale: 1, opacity: 1, ease: 'power2.inOut'}
    )
  }, []);

  return (
    <section id="about-us" className="flex justify-between items-center
     max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
        <h2 id="g_text" className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold opacity-0 translate-y-10">
          <span className=" xl:whitespace-nowrap 
          relative z-10 pr-10 ">We Provide You</span>
          <br />
          <span  className="text-coral-red ">Super Quality</span> Shoes
        </h2>
        <p id="g_text" className="font-montserrat lg:max-w-lg info-text mt-10 opacity-0 translate-y-10">
          Ensuring premium comfort and style, our meticulously crafted
         footwear is designed to elevate your experience, providing you with unmatched
         quality, innovation, and a touch of elegance.
        </p>
        <p id="g_text" className="mt-6 lg:max-w-lg info-text opacity-0 translate-y-10">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div id="g_text" className="mt-12 opacity-0 translate-y-10">
        <Button label="View details" />
        </div>
      </div>
      <div id="sq_image" className="flex flex-1 justify-center items-center opacity-0 translate-x-20, scale-0">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality