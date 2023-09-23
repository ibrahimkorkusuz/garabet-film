import "./crew.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";

const Crew = () => {
  const { t } = useTranslation();

  function newsOnClick(detail: any) {
    alert(detail);
  }

  return (
    <div className="container">
      <h1>{t("CREW")}</h1>
      <div className="row">
        <InfoBox header="" content="" containerClassName="col-md-4" icon={{name:"berfinYasar", className:"img-fluid berfin-yasar"}}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-4" icon={{name:"ozerOnder", className:"img-fluid ozer-onder"}}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-4" icon={{name:"abdullahUgurlu", className:"img-fluid abdullah-ugurlu"}}></InfoBox> 
      </div>
    </div>
  );
};

export default Crew;
