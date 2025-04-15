import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiSass, SiStyledcomponents, SiBootstrap, SiNpm } from "react-icons/si";



const Skills = () => {
    return (
        <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto flex flex-wrap md:flex-nowrap'>

                {/* TEXTO - IZQUIERDA */}
                <div
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-orange-400'
                >
                    <h1
                        data-aos='fade-right'
                        data-aos-delay='500'
                        className='sm:text-4xl text-2xl font-bold title-font mb-10 text-orange-500'>
                        Skills
                    </h1>
                    <p
                        data-aos='fade-right'
                        data-aos-delay='700'
                        className='leading-relaxed text-base text-justify'
                    >
                        En la actualidad tengo conocimientos sólidos en una amplia gama de tecnologías como HTML5, CSS, procesadores de CSS (SASS), JavaScript, frameworks y bibliotecas de JavaScript como React, Bootstrap y Tailwind, y manejo de control de versiones (Git y GitHub).
                    </p>
                </div>

                {/* ÍCONOS - DERECHA */}
                <div
                    data-aos='fade-right'
                    data-aos-delay='500'
                    className='md:w-1/2 md:pl-12 flex flex-col'
                >
                    <nav className='flex flex-wrap list-none -mb-1'>
                        {[
                            { icon: <SiHtml5 className="text-orange-600 object-cover transition-transform duration-300 hover:scale-110" />, label: 'HTML' },
                            { icon: <SiCss3 className="text-blue-600 object-cover transition-transform duration-300 hover:scale-110" />, label: 'CSS' },
                            { icon: <SiJavascript className="text-yellow-400 object-cover transition-transform duration-300 hover:scale-110" />, label: 'JAVASCRIPT' },
                            { icon: <SiReact className="text-blue-400 animate-spin object-cover transition-transform duration-300 hover:scale-110" />, label: 'REACT JS' },
                            { icon: <SiNextdotjs className="object-cover transition-transform duration-300 hover:scale-110"/>, label: 'NEXT JS' },
                            { icon: <SiNodedotjs className="text-green-600 object-cover transition-transform duration-300 hover:scale-110" />, label: 'NODE JS' },
                            { icon: <SiTailwindcss className="text-cyan-400 object-cover transition-transform duration-300 hover:scale-110" />, label: 'TAILWIND CSS' },
                            { icon: <SiSass className="text-pink-500 object-cover transition-transform duration-300 hover:scale-110" />, label: 'SASS' },
                            { icon: <SiStyledcomponents className="text-pink-400 object-cover transition-transform duration-300 hover:scale-110" />, label: 'STYLED COMPONENTS' },
                            { icon: <SiBootstrap className="text-purple-600 object-cover transition-transform duration-300 hover:scale-110" />, label: 'BOOTSTRAP' },
                            { icon: <SiNpm className="text-red-500 object-cover transition-transform duration-300 hover:scale-110" />, label: 'REACT ICONS' },
                        ].map((skill, index) => (
                            <li key={index} className='lg:w-1/3 mb-4 w-1/2 flex flex-col items-center'>
                                {React.cloneElement(skill.icon, {
                                    className: `${skill.icon.props.className} mt-7 rounded-full h-20 w-20 object-cover`,
                                    size: 70
                                })}
                                <span className="mt-2 text-sm text-center">{skill.label}</span>
                            </li>
                        ))}
                    </nav>
                </div>

            </div>
        </section>
    )
}

export default Skills

