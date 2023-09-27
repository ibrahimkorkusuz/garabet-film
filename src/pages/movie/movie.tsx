import "./movie.css";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/icon";
import { Outlet, Link } from "react-router-dom";



const Movie = () => {
  const { t } = useTranslation();

  return (
    <div id="movie-list" className="container-fluid content-body">
      <div className="row">
        
        {/* Boğulmanın Adabı Banner */}
        <div className="col-md-12 movie-item">   
          <Icon name="movieBogulmaninAdabi" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-bogulma">{t("bogulmaninAdabiTitle")}</h2>
            <p>{t("bogulmaninAdabiContent")}</p>
            <div className="movie-button mt-5">
              <button type="button" className="fragman-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#bogulmaninAdabi">{t("fragmanBtn")}</button>
              <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#bogulmaninAdabiDetay">{t("detayBtn")}</button>
            </div> 
          </div> 
        </div>

        {/* Boğulmanın Adabı Fragman */}
        <div className="modal fade" id="bogulmaninAdabi" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <Link className="nav-link" to="/"><Icon name="garabet-logo" className="navbar-brand mx-5 logo-className" /></Link>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/BTm3w6PaU6Y?si=wRT-WP8YCS0iHAtI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Boğulmanın Adabı Detay Content */}
        <div className="modal fade" id="bogulmaninAdabiDetay" aria-hidden="true">
          <div className="modal-dialog modal-detay-dialog">
            <div className="modal-content modal-detay-content">
              <div className="modal-header modal-detay">
                <Icon name="baPoster" imageClassName="img-fluid" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {t("baDetay")}<br /><br />
                {t("baYazanYoneten")}<br/><br />
                {t("baOyuncular")}<br/><br />
                {t("baYapimYili")}<br/><br />
              </div>
            </div>
          </div>
        </div>
        
        {/* KIB Banner */}
        <div className="col-md-12 movie-item">    
          <Icon name="movieKib" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-kib">{t("kibTitle")}</h2>
            <p>{t("kibContent")}</p>
            <div className="movie-button mt-5">
              <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#kibDetay">{t("detayBtn")}</button>
            </div> 
          </div> 
        </div>

        {/* KIB Detay Content */}
        <div className="modal fade" id="kibDetay" aria-hidden="true">
          <div className="modal-dialog modal-detay-dialog">
            <div className="modal-content modal-detay-content">
              <div className="modal-header modal-detay">
                <Icon name="kibPoster" imageClassName="img-fluid" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {t("kibDetay")}<br /><br />
                {t("kibYonetmen")}<br/><br />
                {t("kibOyuncular")}<br/><br />
                {t("kibYapim")}<br/><br />
              </div>
            </div>
          </div>
        </div> 

        {/* Yeryuzunden Banner */}
        <div className="col-md-12 movie-item">    
          <Icon name="movieYeryuzunden" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-yeryuzu">{t("yeryuzuTitle")}</h2>
            <p>{t("yeryuzuContent")}</p>
            <div className="movie-button mt-5">
              <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#yeryuzuDetay">{t("detayBtn")}</button>
            </div> 
          </div> 
        </div>

        {/* Yeryuzunden Detay Content */}
        <div className="modal fade" id="yeryuzuDetay" aria-hidden="true">
          <div className="modal-dialog modal-detay-dialog">
            <div className="modal-content modal-detay-content">
              <div className="modal-header modal-detay">
                <Icon name="yeryuzuPoster" imageClassName="img-fluid" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {t("yeryuzuDetay")}<br /><br />
                {t("yeryuzuYonetmen")}<br/><br />
                {t("yeryuzuOyuncular")}<br/><br />
                {t("yeryuzuYapim")}<br/><br />
              </div>
            </div>
          </div>
        </div> 

        {/* SINMEK Banner */}
        <div className="col-md-12 movie-item">    
          <Icon name="movieSinmek" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-sinmek">{t("sinmekTitle")}</h2>
            <p>{t("fikretContent")}</p>
            <div className="movie-button mt-5">
              <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#sinmekDetay">{t("detayBtn")}</button>
            </div> 
          </div> 
        </div>

        {/* SINMEK Detay Content */}
        <div className="modal fade" id="sinmekDetay" aria-hidden="true">
          <div className="modal-dialog modal-detay-dialog">
            <div className="modal-content modal-detay-content">
              <div className="modal-header modal-detay">
                <Icon name="sinmekPoster" imageClassName="img-fluid" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {t("sinmekDetay")}<br /><br />
                {t("sinmekYonetmen")}<br/><br />
                {t("sinmekOyuncular")}<br/><br />
                {t("sinmekYapim")}<br/><br />
              </div>
            </div>
          </div>
        </div> 

        {/* Fikret Banner */}
        <div className="col-md-12 movie-item">    
          <Icon name="movieFikret" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-fikret">{t("fikretTitle")}</h2>
            <p>{t("fikretContent")}</p>
            <div className="movie-button mt-5">
              <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#fikretDetay">{t("detayBtn")}</button>
            </div> 
          </div> 
        </div>

        {/* Fikret Detay Content */}
        <div className="modal fade" id="fikretDetay" aria-hidden="true">
          <div className="modal-dialog modal-detay-dialog">
            <div className="modal-content modal-detay-content">
              <div className="modal-header modal-detay">
                <Icon name="fikretPoster" imageClassName="img-fluid" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {t("fikretDetay")}<br /><br />
                {t("fikretYonetmen")}<br/><br />
                {t("fikretOyuncular")}<br/><br />
                {t("fikretYapim")}<br/><br />
              </div>
            </div>
          </div>
        </div> 
        
      </div>
    </div>
  );
};

export default Movie;
