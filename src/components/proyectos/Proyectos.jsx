
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imagen1 from '../../assets/imagen1.png'
import imagen2 from '../../assets/imagen2.png'
import imagen3 from '../../assets/imagen3.png'
import imagen4 from '../../assets/imagen4.png'
import imagen5 from '../../assets/imagen5.png'
import imagen6 from '../../assets/imagen6.png'



const Proyectos = () => {

    const listProjects = [
        {
            id: 1, image: imagen1, title: 'Lista de Tareas', description: 'Las tecnologías que utilice para el desarrollo de ésta aplicación son React Js y Typescript.', github: 'https://agenda-tareas-react-ts.netlify.app/',
        },
        {
            id: 2, image: imagen2, title: 'Ecommerce', description: 'Las tecnologías que utilice para el desarrollo de ésta aplicación son React Js, CSS, Bootstrap, Hooks, APIs, Context y Firebase.', github: 'https://ecommerce-clotheshop.netlify.app/'
        },
    
        {
            id: 3, image: imagen3, title: 'Guyon Inmobiliaria', description: 'Las tecnologías que utilice en el desarrollo de ésta aplicación son HTML, CSS, JavaScript y Bootstrap.', github: 'https://josefina-coder2022.github.io/app-guyon/',
            },
        {
            id: 4, image: imagen4, title: 'Resto - La Meson', description: 'Las tecnologías que utilice en el desarrollo de ésta aplicación son HTML, CSS, SASS y Bootstrap.', github: 'https://josefina-coder2022.github.io/laMaison/',
            },
        {
            id: 5, image: imagen5, title: 'Centro Estetica', description: 'Desarrollo de sitio institucional. Las tecnologías que utilice para desarrollar el sitio fueron HTML y CSS.', github: 'https://josefina-coder2022.github.io/app-centro-estetica/',
            },
        {
            id: 6, image: imagen6, title: 'Pomess', description: 'Desarrollo de sitio institucional. Las tecnologías que utilice para desarrollar el sitio fueron HTML y CSS.', github: 'https://josefina-coder2022.github.io/pomess-web/',
            }
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

  return (
      <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
          <div className='container px-5 py-24 mx-auto'>
              <h2 className='text-4xl text-orange-500 font-bold text-center mb-12'>Mis Proyectos</h2>
              <Slider {...settings}>
                  {
                      listProjects.map((project) => {
                          return (
                              <div key={project.id} className='p-4'>
                                  <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                      <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                      <div className='p-6'>
                                          <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                          <p className='leading-relaxed mb-3'>{project.description}</p>
                                          <div className='flex justify-center mt-4'>
                                              <a
                                                  href={project.github}
                                                  target='_blank'
                                                  rel='noopener noreferrer'
                                                  className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300'
                                              >
                                                  Ver Proyecto
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )

                      })
                  }
              </Slider>
          </div>
      </section>
  )
}

export default Proyectos