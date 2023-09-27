import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./layout.css";
import Icon from "../../assets/icon";
import "bootstrap/dist/js/bootstrap.js"

const Layout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e: any) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top menu-nav-font">
          <div className="container-fluid">
          <Link className="nav-link" to="/"><Icon name="garabet-logo" className="navbar-brand logo-className" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
               {/*  <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">{t("HOME")}</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/movie">{t("MOVIE")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/documentary">{t("DOCUMENTARY")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">{t("SERVICES")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">{t("NEWS")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crew">{t("CREW")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">{t("CONTACT")}</Link>
                </li>
              </ul>

              <div className="social-icons mx-5">
                <div className="social-icon">
                  <a href="https://www.facebook.com/suffocatingwithmanners/"><Icon name="facebook-logo" className="social-item" /></a>
                </div>
                <div className="social-icon">
                  <a href="https://twitter.com/sufocatinwmaner"><Icon name="twitter-logo" className="social-item" /></a>
                </div>
                <div className="social-icon">
                  <a href="https://vimeo.com/sertackoyuncu"><Icon name="instagram-logo" className="social-item" /></a>
                </div>
                <div className="social-icon">
                  <a href="https://www.instagram.com/suffocatingwithmanners/"><Icon name="vimeo-logo" className="social-item" /></a>
                </div>
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/sertac-koyuncu-a6a21b168/"><Icon name="linkedin-logo" className="social-item" /></a>
                </div>
              </div>
              
              <div>
                {/* !!! Do not translate langauge names !!! */}
                <select className="language form-select" onChange={changeLanguageHandler}>
                  <option value="en">EN</option>
                  <option value="tr">TR</option>
                </select>
              </div>
            </div>
          </div>
        </nav>

      <Outlet />
    </>
  );
};

export default Layout;
