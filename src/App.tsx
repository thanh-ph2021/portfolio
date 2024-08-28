import './App.css';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { About } from './components/About';

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
