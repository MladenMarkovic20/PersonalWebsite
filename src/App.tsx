import { motion, useScroll } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import HorizontalLine from './components/HorizontalLine';
import AboutSection from './features/AboutSection/components/AboutSection';
import Contact from './features/Contact/components/Contact';
import Footer from './features/Footer/components/Footer';
import Header from './features/Header/components/Header';
import NavBar from './features/NabBar/components/NavBar';
import Project from './features/ProjectList/components/Project';
import Slider from './features/Slider/components/Slider';
import Testimonials from './features/Testimonials/components/Testimonials';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <BrowserRouter>
      <div className="z-50 grid min-h-screen w-screen grid-rows-[auto,1fr,auto] overflow-x-hidden bg-stone-100 xl:h-screen xl:snap-y xl:snap-mandatory xl:snap-always xl:overflow-y-scroll">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed left-0 right-0 top-0 h-1 origin-[0%] transform bg-stone-300"
        />

        <div className="flex w-screen snap-start flex-col items-center xl:h-screen">
          <div className="flex flex-col xl:h-screen">
            <NavBar />
            <HorizontalLine text="" />
            <Header />
          </div>
        </div>

        <div className="flex w-screen snap-start flex-col items-center xl:h-screen">
          <div className="flex h-full flex-col">
            <HorizontalLine text="Professional Summary" />
            <AboutSection />
          </div>
        </div>

        <div className="flex w-screen flex-col items-center xl:h-full">
          <div className="flex flex-col">
            <HorizontalLine text="Projects" />
            <Project />
          </div>
        </div>

        <div className="flex w-screen snap-start flex-col items-center xl:h-screen">
          <div className="flex flex-col">
            <HorizontalLine text="Skills" />
            <Slider />
            <HorizontalLine text="Testimonials" />
            <Testimonials />
          </div>
        </div>

        <div className="flex w-screen snap-start flex-col items-center xl:h-screen">
          <div className="flex h-screen flex-col">
            <HorizontalLine text="Contact Information" />
            <Contact />
            <HorizontalLine text="Social Media Platforms" />
            <Footer />
          </div>
        </div>

        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              background: '#e7e5e4',
              color: '#0c0a09',
              fontFamily: 'Oswald',
              fontSize: 20,
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
