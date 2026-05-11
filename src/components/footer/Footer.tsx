import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-copy">© {year} Gabriel Kažimír</p>
    </footer>
  );
};

export default Footer;
