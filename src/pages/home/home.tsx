import "./home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  
  //TODO: sayfaların html'leri oluşturulup return ile dönülecek.
 
  return <h1>{t("Home")}</h1>;
};

export default Home;
