import React from 'react'
import programador from '../../assets/programador.avif'

const Experiencia = () => {

  return (
      <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>

          <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
              <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
              <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
          </div>

          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
              
              <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
                  <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
                  <img src={programador} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
              </div>

              <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center'>
                  <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-orange-500 '>Experiencia</h1>
                  <h2 className='title-font font-bold text-white sm:text-2xl '>Abril 2019 - Actualidad</h2>
                  <p className='mb-8 text-white leading-relaxed '>En la actualidad me encuentro trabajando para Browix que es un software de gestión de recursos humanos, una plataforma para control de horario y la geolocalización del personal. Asigna tareas y recibe novedades. Siendo mis actividades principales:</p>
                  <ul>
                      <li className='text-white sm:text-1xl'>Manejo de cuenta de clientes.</li>
                      <li className='text-white sm:text-1xl'>Administración integral del ciclo de vida del cliente, incluyendo la activación, seguimiento y mantenimiento de sus cuentas.</li>
                      <li className='text-white sm:text-1xl'>Soporte en dudas del sistema vía chat y email.</li>
                      <li className='text-white sm:text-1xl'>Atención al cliente en tiempo real o diferido para resolver consultas operativas y técnicas relacionadas con el uso del sistema.</li>
                      <li className='text-white sm:text-1xl'>Generación de manuales de usuarios</li>
                      <li className='text-white sm:text-1xl'>Creación de documentación clara y visual que facilita el uso del sistema por parte de los usuarios finales.</li>
                      <li className='text-white sm:text-1xl'>Realización de meets para capacitar a los clientes sobre el uso de la aplicación, usuarios nuevos o para reforzar el uso de funcionalidades específicas.</li>
                  </ul>
              </div>
          </div>

      </section>
  )
}

export default Experiencia