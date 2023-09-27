import "./home.css";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/icon";



const Home = () => {
  const { t } = useTranslation();
  
  //TODO: sayfaların html'leri oluşturulup return ile dönülecek.

  return <>
      <div className="banner-item content-body">
        <Icon name="homeBanner" imageClassName="img-fluid home-banner-mobile"/>
        <p className="banner-text">
          {t("bannerText")}
        </p>
      </div>
  </>;
};

export default Home;
