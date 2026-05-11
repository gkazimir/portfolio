import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import CredibilityStrip from './components/home/CredibilityStrip';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

/**
 * It renders the root application layout with the navigation and all page sections.
 * @returns
 */
const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <CredibilityStrip />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
