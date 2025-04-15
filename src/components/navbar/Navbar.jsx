import React from 'react'

const Navbar = () => {

    const listNavbar = [
        { name: 'Inicio', link: '#inicio' },
        { name: 'Sobre Mi', link: '#sobremi' },
        { name: 'Skilles', link: '#skilles' },
        { name: 'Experiencia', link: '#experiencia' },
        { name: 'Proyectos', link: '#proyectos' },
    ];

  return (
      <header className='text-gray-600 body-font z-10'>
          <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
              <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                  <span className='ml-3 text-3xl font-bold text-orange-500 '>Porfolio</span>
              </a>

              <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center p-10 justify-center'>
                  {
                      listNavbar.map((item, index) => (
                          <a key={index} href={item.link} className='mr-5 hover:text-orange-400'>
                              {item.name}
                          </a>
                      ))
                  }
              </nav>
              <button className='inline-flex items-center py-3 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border bg-violet-600 rounded-full border-white hover:border-pink-400 hover:text-white hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] hover:bg-orange-400'>
                  <a href='#contact'>Contactame</a>
              </button>
          </div>
      </header>
  )
}

export default Navbar