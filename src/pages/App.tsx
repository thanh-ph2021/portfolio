import './App.css';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { NavBar } from '../components/NavBar';
import { Projects } from '../components/Projects';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
