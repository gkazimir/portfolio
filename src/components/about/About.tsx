import SectionWrapper from '../ui/SectionWrapper';
import './About.scss';

const About = () => {
  return (
    <SectionWrapper id="about" alt>
      <div className="about">
        <h2 className="about-title">About</h2>
        <div className="about-body">
          <p>
            I'm a frontend developer based in Slovakia, working at Deutsche
            Telekom IT Solutions since 2022 — first part-time during my studies,
            then full-time from June 2024. I studied Informatics at the{' '}
            <strong>Technical University of Košice</strong> where I got a
            foundation in C, Python, Java, SQL, and early web technologies, with
            additional exposure to IoT, networking, UX/UI, and other informatics
            fundamentals.
          </p>
          <p>
            My day-to-day is <strong>Angular</strong> — building and maintaining
            internal enterprise tools in agile, sprint-based teams using Scrum
            and Jira. I've worked across multiple internal products, including
            migrating a standalone Angular application into an{' '}
            <strong>NX monorepo</strong> and adopting{' '}
            <strong>Angular Signals</strong> and Taiga UI as part of that
            transition. I also have about a year of <strong>React</strong>{' '}
            experience from a separate internal product built with Vite and
            TypeScript.
          </p>
          <p>
            I wouldn't call myself senior yet — but I'm past the point of
            needing things explained twice. I focus on delivering clean,
            maintainable code, understanding the products I build, and improving
            with each project I'm part of.
          </p>
        </div>

        <p className="about-personal">
          Outside of work I keep things simple — gym, hiking when the weather
          allows, and occasionally booking flights before I’ve fully thought
          them through.
        </p>

        <div className="about-timeline">
          <div className="about-entry">
            <span className="about-year">2024 – present</span>
            <div>
              <span className="about-entry-title">
                Application Developer (Front End)
              </span>
              <span className="about-entry-sub">
                Full-time · Deutsche Telekom IT Solutions
              </span>
            </div>
          </div>
          <div className="about-entry">
            <span className="about-year">2022 – 2024</span>
            <div>
              <span className="about-entry-title">Front End Developer</span>
              <span className="about-entry-sub">
                Part-time · Deutsche Telekom IT Solutions
              </span>
            </div>
          </div>
          <div className="about-entry">
            <span className="about-year">2024</span>
            <div>
              <span className="about-entry-title">Ing. in Informatics</span>
              <span className="about-entry-sub">
                Technical University of Košice, Slovakia
              </span>
            </div>
          </div>
          <div className="about-entry">
            <span className="about-year">2022</span>
            <div>
              <span className="about-entry-title">Bc. in Informatics</span>
              <span className="about-entry-sub">
                Technical University of Košice, Slovakia
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
