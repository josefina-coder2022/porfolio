import { useEffect } from 'react';
import './App.css'
import Hero from './components/hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from './components/skills/Skills';
import Experiencia from './components/experiencia/Experiencia';
import SobreMi from './components/sobremi/SobreMi';
import Proyectos from './components/proyectos/Proyectos';
import Contacto from './components/contacto/Contacto';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <main className='bg-[#0d182e]'>
        <Hero />
        <SobreMi />
        <Skills />
        <Experiencia />
        <Proyectos />
        <Contacto />
      </main>
    </>
  )
}

export default App
