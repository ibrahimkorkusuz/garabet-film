import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact content-body">
        <h1>{t("Contact")}</h1>
      </div>
    </>
  );
};

export default Contact;
