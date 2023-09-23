import "./documentary.css";
import "../movie/movie.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";

const Documentary = () => {
  const { t } = useTranslation();

  return (
    <div id="movie-list" className="container-fluid">
      <h1>{t("DOCUMENTARY")}</h1>
      <div className="row movie-item">
        <img src="http://garabetfilms.com/wp-content/uploads/2023/02/prenses-model.jpg" alt="Boğulmanın Adabı" className="img-fluid" />
        <div className="movie-info">
          <h2 className="title-prenses">Prenses Model</h2>
          <p>Gelinlik sektöründe çalışan kadın işçiler prenses masallarını alaşağı ediyor.</p>
          <div className="movie-button mt-5">
            <a href="#" className="fragman-btn btn btn-danger">Fragmanı İzle</a> 
            <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
          </div> 
        </div> 
      </div>

      <div className="row movie-item">    
        <img src="http://garabetfilms.com/wp-content/uploads/2023/02/cinler-cirit-oynarken.jpg" alt="Fikret" className="img-fluid" />
        <div className="movie-info">
          <h2 className="title-cinler">Cinler Cirit Oynarken</h2>
          <p>Şeytanlı Ağaç, Cin Kuyusu, Dipsiz Göl… Anadolu’nun cinlerin cirit attığı köşelerini keşfe çıkıyoruz.</p>
          <div className="movie-button mt-5">
            <a href="#" className="fragman-btn btn btn-danger">Fragmanı İzle</a> 
            <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
          </div> 
        </div> 
      </div>   

      </div>
  );
};

export default Documentary;
