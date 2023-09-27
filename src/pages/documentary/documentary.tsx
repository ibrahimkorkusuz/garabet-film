import "./documentary.css";
// import "../movie/movie.css";
import Icon from "../../assets/icon";
import { useTranslation } from "react-i18next";

const Documentary = () => {
  const { t } = useTranslation();

  return (
    <div id="movie-list" className="container-fluid content-body">

      {/* PRENSES Banner */}
      <div className="col-md-12 movie-item">   
        <Icon name="prensesModel" imageClassName="img-fluid"/> 
        <div className="movie-info">
          <h2 className="title-prenses">{t("prensesModelTitle")}</h2>
          <p>{t("prensesModelContent")}</p>
          <div className="movie-button mt-5">
            <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#prensesDetay">{t("detayBtn")}</button>
          </div> 
        </div> 
      </div>
      
      {/* PRENSES Detay Content */}
      <div className="modal fade" id="prensesDetay" aria-hidden="true">
        <div className="modal-dialog modal-detay-dialog">
          <div className="modal-content modal-detay-content">
            <div className="modal-header modal-detay">
              <Icon name="prensesPoster" imageClassName="img-fluid" />
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {t("prensesDetay")}<br /><br />
              {t("prensesYonetmen")}<br/><br />
              {t("prensesOyuncular")}<br/><br />
              {t("prensesYapim")}<br/><br />
            </div>
          </div>
        </div>
      </div> 

      {/* CINLER Banner */}
      <div className="row movie-item">    
        <Icon name="cinlerCirit" imageClassName="img-fluid"/> 
        <div className="movie-info">
          <h2 className="title-cinler">{t("cinlerTitle")}</h2>
          <p>{t("cinlerContent")}</p>
          <div className="movie-button mt-5">
            <button type="button" className="detay-btn btn btn-light mx-2" data-bs-toggle="modal" data-bs-target="#cinlerDetay">{t("detayBtn")}</button>
          </div> 
        </div> 
      </div>

      {/* CINLER Detay Content */}
      <div className="modal fade" id="cinlerDetay" aria-hidden="true">
        <div className="modal-dialog modal-detay-dialog">
          <div className="modal-content modal-detay-content">
            <div className="modal-header modal-detay">
              <Icon name="cinlerPoster" imageClassName="img-fluid" />
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {t("cinlerDetay")}<br /><br />
              {t("cinlerYonetmen")}<br/><br />
              {t("cinlerOyuncular")}<br/><br />
              {t("cinlerYapim")}<br/><br />
            </div>
          </div>
        </div>
      </div>   

      </div>
  );
};

export default Documentary;
