import "./documentary.css";
import "../movie/movie.css";
import Icon from "../../assets/icon";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";

const Documentary = () => {
  const { t } = useTranslation();

  return (
    <div id="movie-list" className="container-fluid">
      <h1>{t("DOCUMENTARY")}</h1>

      <div className="col-md-12 movie-item">   
          <Icon name="prensesModel" imageClassName="img-fluid"/> 
          <div className="movie-info">
            <h2 className="title-prenses">{t("prensesModelTitle")}</h2>
            <p>{t("prensesModelContent")}</p>
            <div className="movie-button mt-5">
              <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
            </div> 
          </div> 
        </div>

      <div className="row movie-item">    
        <img src="http://garabetfilms.com/wp-content/uploads/2023/02/cinler-cirit-oynarken.jpg" alt="Fikret" className="img-fluid" />
        <div className="movie-info">
          <h2 className="title-cinler">{t("cinlerTitle")}</h2>
          <p>{t("cinlerContent")}</p>
          <div className="movie-button mt-5">
            <a href="#" className="detay-btn btn btn-light mx-2">{t("detayBtn")}</a>
          </div> 
        </div> 
      </div>   

      </div>
  );
};

export default Documentary;
