import Button from '../components/Button';

import { useState } from 'react';

import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CountUp from 'react-countup';



const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('#shoeBg', {
      opacity: 0,
      scale: 0.5
    },
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: 'power2.inOut'
    }
  )
  gsap.to('#heroP', {
    opacity: 1,
    delay: 1,
    stagger: 1
  })
  gsap.to('#heroText', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.5
  })
  gsap.to('#shoeThumbs', {
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.5
  })
  }, [])
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col 
      justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start
        w-full max-xl:padding-x pt-28">
        <p id='heroP' className="text-xl opacity-0 font-montserrat text-coral-red">Unleash Your Potentials</p>
        <h1 id='heroText' className="mt-10 font-palanquin text-8xl max-sm:text-[72px] 
         font-bold opacity-0 translate-y-20  xl:whitespace-nowrap z-10">Discover The Latest
          {/* <span className=" 
          relative z-10 pr-10"></span> */}
          <br />
          <span id='heroP' className="text-coral-red inline-block mt-3 opacity-0">Nike</span> Shoes
        </h1>
        <p id='heroText' className="font-montserrat text-slate-gray text-lg leading-8
         mt-6 mb-10 sm:max-w-sm opacity-0 translate-y-20">Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <div id='heroText' className="flex items-center gap-3 opacity-0 translate-y-20">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Explore collection" borderColor="border-coral-red" backgroundColor="transparent" textColor='text-coral-red'/>

        </div>

        <div className="flex justify-start items-start flex-wrap
          w-full mt-20 gap-16">
          { statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">
                <CountUp start={0} end={stat.value} duration={3}>
                </CountUp>
                +</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
      <div className="relative flex-1 flex justify-center items-start xl:min-h-screen 
        max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img id='shoeBg' src={bigShoeImg} alt="shoe collection" width={720} height={720} 
        className="object-contain relative z-10"/>
        <div className='flex sm:gap-6 absolute gap-4 -bottom-[5%] 
         sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div id='shoeThumbs' className='opacity-0 translate-x-60' key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg (shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero