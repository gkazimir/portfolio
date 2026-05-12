import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import './Contact.scss';

const contacts = {
  email: 'gabrielkazimir1@gmail.com',
  github: 'https://github.com/gkazimir',
  linkedin: 'https://www.linkedin.com/in/gabriel-ka%C5%BEim%C3%ADr-336090224/',
};

/**
 * It renders the contact section with a call-to-action and social links.
 * @returns
 */
const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="contact">
        <h2 className="contact-title">Get in Touch</h2>
        {/* <p className="contact-text">
          This is a personal page — not an active job search. If you want to
          connect, ask something, or just say hi, feel free to reach out.
        </p> */}
        <div className="contact-cta">
          <Button href={`mailto:${contacts.email}`}>Send an Email</Button>
        </div>
        <div className="contact-social">
          <a
            href={contacts.github}
            className="contact-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in new tab)"
          >
            GitHub
          </a>
          <span className="contact-divider" aria-hidden="true">
            ·
          </span>
          <a
            href={contacts.linkedin}
            className="contact-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
