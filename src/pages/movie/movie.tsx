import "./movie.css";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/icon";
import InfoBox from "../../components/infoBoxComponent/infoBox";


const Movie = () => {
  const { t } = useTranslation();

  return (
    <div id="movie-list" className="container">
      <h1>{t("MOVIE")}</h1> 
      <div className="row">
        {/* <InfoBox header="" content="" containerClassName="col-md-12" icon={{name:"movieBogulmaninAdabi", className:"", imageClassName:"img-fluid"}}></InfoBox>    */} 

        <div className="col-md-12 movie-item">   
          <Icon name="movieBogulmaninAdabi" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-bogulma">{t("bogulmaninAdabiTitle")}</h2>
            <p>{t("bogulmaninAdabiContent")}</p>
            <div className="movie-button mt-5">
              <button type="button" className="fragman-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#bogulmaninAdabi">{t("fragmanBtn")}</button>
              <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
            </div> 
          </div> 
        </div>

        <div className="modal fade" id="bogulmaninAdabi" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{t("bogulmaninAdabiTitle")}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {t("bogulmaninAdabiContent")}
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/BTm3w6PaU6Y?si=wRT-WP8YCS0iHAtI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-12 movie-item">    
          <Icon name="movieKib" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-kib">{t("kibTitle")}</h2>
            <p>{t("kibContent")}</p>
            <div className="movie-button mt-5">
              <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
            </div> 
          </div> 
        </div> 

        <div className="col-md-12 movie-item">    
          <Icon name="movieYeryuzunden" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-yeryuzu">{t("yeryuzuTitle")}</h2>
            <p>{t("yeryuzuContent")}</p>
            <div className="movie-button mt-5">
              <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
            </div> 
          </div> 
        </div>

        <div className="col-md-12 movie-item">    
          <Icon name="movieSinmek" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-sinmek">{t("sinmekTitle")}</h2>
            <p>{t("fikretContent")}</p>
            <div className="movie-button mt-5">
              <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
            </div> 
          </div> 
        </div>

        <div className="col-md-12 movie-item">    
          <Icon name="movieFikret" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-fikret">{t("fikretTitle")}</h2>
            <p>{t("fikretContent")}</p>
            <div className="movie-button mt-5">
              <a href="#" className="fragman-btn btn btn-danger">{t("fragmanBtn")}</a> 
              <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
            </div> 
          </div> 
        </div>
        
      </div>
    </div>
  );
};

export default Movie;
