import "./home.css";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/icon";



const Home = () => {
  const { t } = useTranslation();
  
  //TODO: sayfaların html'leri oluşturulup return ile dönülecek.

  return <>
      <Icon name="homeBannerTR" imageClassName="img-fluid home-banner"/>
      <Icon name="homeBannerEN" imageClassName="img-fluid home-banner"/>
  </>;
};

export default Home;
