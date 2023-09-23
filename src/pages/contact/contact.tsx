import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return <h1>{t("Contact")}</h1>;
};

export default Contact;
