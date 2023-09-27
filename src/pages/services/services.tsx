import "./services.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";


const Services = () => {
  const { t } = useTranslation();



  return(
  <>
    <div className="container services content-body">
      <div className="row">
      <InfoBox
        containerClassName="col-md-6 service-border flip-card"
        containerSubClassName="flip-card-inner"
        icon={{ name: "proje-gelistirme", className: "flip-card-front" }}
        infoBoxContentClassName="flip-card-back px-5"
        infoBoxTitleClassName="title-proje"
        header="projeGelistirmeTitle"
        content="projeGelistirmeContent"
      />

      <InfoBox
        containerClassName="col-md-6 service-border flip-card mobile-line"
        containerSubClassName="flip-card-inner"
        icon={{ name: "yapim", className: "flip-card-front" }}
        infoBoxContentClassName="flip-card-back px-5"
        infoBoxTitleClassName="title-yapim"
        header="yapimTitle"
        content="yapimContent"
      />

      <InfoBox
        containerClassName="col-md-6 service-border flip-card service-line"
        containerSubClassName="flip-card-inner"
        icon={{ name: "dagitim", className: "flip-card-front" }}
        infoBoxContentClassName="flip-card-back px-5"
        infoBoxTitleClassName="title-dagitim"
        header="dagitimTitle"
        content="dagitimContent"
      />

      <InfoBox
        containerClassName="col-md-6 service-border flip-card service-line"
        containerSubClassName="flip-card-inner"
        icon={{ name: "satis", className: "flip-card-front" }}
        infoBoxContentClassName="flip-card-back px-5"
        infoBoxTitleClassName="title-satis"
        header="satisTitle"
        content="satisContent"
      />

      </div>
      

     {/*  <div className="row services mt-5">
        <div className="col-md-6 service-border">
          <img className="img-fluid mx-auto d-block my-5" alt="proje" src="http://garabetfilms.com/wp-content/uploads/2023/03/mor_yapim-213x300.png"/>
        </div>
        <div className="services text-white col">
          <div className="service-text my-5">
            <h3 className="title-proje">{t("projeGelistirmeTitle")}</h3>
            <p>{t("projeGelistirmeContent")}</p>
          </div>
        </div>
      </div>

      <div className="row services mt-2">
        <div className="col-md-6 service-border text-white">
          <div className="service-text my-5 text-right">
            <h3 className="title-yapim">{t("yapimTitle")}</h3>
            <p>{t("yapimContent")} </p>
          </div>
        </div>
        <div className="services col">
          <img className="img-fluid mx-auto d-block my-5" alt="proje" src="http://garabetfilms.com/wp-content/uploads/2023/03/mor_yapim-213x300.png"/>
        </div>
      </div>

      <div className="row services mt-2">
        <div className="col-md-6 service-border">
          <img className="img-fluid mx-auto d-block my-5" alt="proje" src="http://garabetfilms.com/wp-content/uploads/2023/03/mor_yapim-213x300.png"/>
        </div>
        <div className="services text-white col">
          <div className="service-text my-5">
            <h3 className="title-dagitim">{t("dagitimTitle")}</h3>
            <p>{t("dagitimContent")} </p>
          </div>
        </div>
      </div>

      <div className="row services mt-2">
        <div className="col-md-6 service-border text-white">
          <div className="service-text my-5 text-right">
            <h3 className="title-satis">{t("satisTitle")}</h3>
            <p>{t("satisContent")} </p>
          </div>
        </div>
        <div className="services col">
          <img className="img-fluid mx-auto d-block my-5" alt="proje" src="http://garabetfilms.com/wp-content/uploads/2023/03/mor_yapim-213x300.png"/>
        </div>
      </div> */}


    </div>
    </>
  );
};

export default Services;
