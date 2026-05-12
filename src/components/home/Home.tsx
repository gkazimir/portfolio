import './Home.scss';

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/**
 * It renders the home landing section with name, role, description and call-to-action links.
 * @returns
 */
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        <h1 className="home-name">Gabriel Kažimír</h1>
        <p className="home-role">Frontend Developer</p>
        <p className="home-description">
          I build frontend systems that need to be clear,
          <br />
          fast, and dependable.
        </p>
        <p className="home-detail">
          Four years in enterprise frontend at Deutsche Telekom IT Solutions —
          Angular is my primary stack, with a year of React on a separate
          internal product. I care about writing clean, maintainable code — the
          kind that survives handoff, review, and production.
        </p>
        <div className="home-links">
          <a
            href="#experience"
            className="home-link"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('experience');
            }}
          >
            See my experience <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className="home-link home-link-muted"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
