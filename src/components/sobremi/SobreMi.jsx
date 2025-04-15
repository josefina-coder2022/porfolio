import React from 'react'


const SobreMi = () => {
  return (
      
      <section
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-white body-font z-10">
          <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center justify-center text-center md:text-left">

              {/* Texto */}
              <div className="md:w-1/2 w-full flex flex-col items-center">
                  <h1
                      data-aos="fade-left"
                      data-aos-delay="300"
                      className="sm:text-4xl text-2xl title-font mb-6 text-orange-500 font-bold">
                      Sobre Mi
                  </h1>
                  <p
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="mb-8 leading-relaxed max-w-xl text-justify">
                      Soy desarrolladora front end, en la actualidad me encuentro trabajando para Browix que es un software de gestión de recursos humanos, de forma remota haciendo soporte. El trabajo en esta empresa me abrió al mundo de la tecnología, el cual me atrapó y fascinó por completo siendo lo que me motivó a capacitarme para formarme como desarrolladora.
                      La programación despierta en mí una profunda curiosidad y deseo constante de superación. Es un mundo en permanente evolución que me motivan a seguir creciendo y aprendiendo día a día. </p>
                  <p data-aos="fade-right"
                      data-aos-delay="600"
                      className="mb-8 leading-relaxed max-w-xl text-justify">
                      Estoy acostumbrada al trabajo en equipo, poseo facilidad y fluidez en la comunicación, capacidad analítica para la resolución de problemas y actitud de aprendizaje para adaptarme a las nuevas tecnologías y conceptos.
                      Estoy abierta a nuevas oportunidades laborales que me permitan seguir aprendiendo y creciendo profesionalmente en el mundo del desarrollo y la tecnología brindando siempre todo mi compromiso, actitud proactiva y lo mejor de mí.</p>            
              </div>

              {/* Imagen */}
              {/* <div
                  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0"
                  data-aos="zoom-in"
                  data-aos-delay="800"
              >
                  <img
                      src=""
                      alt="hero"
                      className="object-cover object-center rounded-full w-80 h-80"
                  />
              </div> */}
          </div>
      </section>

          
        //   <section
        //       data-aos='fade-up'
        //       data-aos-delay='250'
        //       className='text-white body-font z-10'>
        //       <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        //           <h1 data-aos='fade-left'
        //               data-aos-delay='500'
        //               className='sm:text-4xl text-2xl font-medium title-font mb-10 text-orange-500'>SOBRE MI</h1>
        //               <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error quasi est labore? Laborum hic commodi architecto ex eligendi quasi. Accusantium provident ipsa illum facilis praesentium fuga aliquid, eveniet molestiae.
        //               </p>
                      
        //           </div>
        //           <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        //               <img src="" alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
        //           </div>
        //   </section>
    
  )
}

export default SobreMi