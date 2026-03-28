export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <span className="footer__logo-l">L</span>
          <span className="footer__logo-partners">PARTNERS</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} LPartners. Tous droits réservés.
        </p>
        <div className="footer__links">
          <a href="#" className="footer__link">Confidentialité</a>
          <a href="#" className="footer__link">Mentions légales</a>
        </div>
      </div>
    </footer>
  )
}
