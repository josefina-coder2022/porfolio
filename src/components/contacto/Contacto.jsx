import React from 'react'
import { FaArrowUp } from 'react-icons/fa';

const Contacto = () => {
  return (
      <section id='contact' data-aos='fade-up' data-aos-delay='400'>
          <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
              <h2 className='mb-4 text-4xl tracking-tight font-bold text-center text-orange-500'>Contactame</h2>
              <form action='#' className='space-y-8'>
                  <div>
                      <label for='email' className='block mb-2 text-xl font-medium text-white'>Email</label>
                      <input
                          type='email'
                          id='email'
                          className='shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                          placeholder='nombre@ejemplo.com' required />
                  </div>
                  <div className='sm:col-span-2'>
                      <label for='message' className='block mb-2 text-xl font-medium text-white'>Message</label>
                      <textarea
                          rows="6"
                          id='message'
                          className='shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                          placeholder='Dejame tu comentario...' required />
                  </div>
                  <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg'>
                      Enviar
                  </button>
              </form>
          </div>
          <a
              href="#"
              className="fixed right-6 bottom-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
              aria-label="Volver arriba"
          >
              <FaArrowUp className="text-2xl" />
          </a>
      </section>
  )
}

export default Contacto