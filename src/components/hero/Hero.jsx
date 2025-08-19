import React from 'react'
import Navbar from '../navbar/Navbar'
import img from '../../assets/img-hero.jpg'
import imagen2 from '../../assets/imagen2-hero.jpeg'
import { FaGrinBeam } from 'react-icons/fa'
import CV from './cv-josefinasirito.pdf'
import { useEffect, useState } from "react";



const Hero = () => {

    const fullText = "Soy desarrolladora front end, gracias por tu interés en conocerme...";
    const [displayedText, setDisplayedText] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(() => setShowEmoji(true), 500); // emoji aparece después de escribir todo
            }
        }, 50); // velocidad del tipeo

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
            <div className=''>
            </div>

            <Navbar />

            <section data-aos='fade-up' data-aos-delay='250' className='text-white body-font z-10'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative'>
                        <img src={imagen2} alt="imagen secundaria" data-aos='fade-up' data-aos-delay='400' className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20' />
                        <h1 className='title-font sm:text-4xl text-4xl mb-10 font-bold text-white'>Hola! Soy Josefina</h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="mb-10 leading-relaxed text-white text-lg flex items-center gap-2">
                            {displayedText}
                            {showEmoji && (
                                <span className="text-yellow-500 text-2xl animate-bounce">😊</span>
                            )}
                        </p>
                        <div className='flex justify-center'>
                            <a href={CV}>
                                <button className='inline-flex text-white bg-violet-600 border-0 py-4 px-6 mt-10 focus:outline-none hover:bg-pink-500 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                rounded-full text-lg'>
                                    Descargar CV
                                </button>
                            </a>
                        </div>

                    </div>

                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <img src={img} alt="hero" className='object-cover object-center rounded-full w-[24rem] h-[24rem]' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero