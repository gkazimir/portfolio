import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import CredibilityStrip from './components/home/CredibilityStrip';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

/**
 * It renders the root application layout with the navigation and all page sections.
 * @returns
 */
const App = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Home />
        <CredibilityStrip />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />

      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
