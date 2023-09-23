import "./infoBox.css";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/icon";

function InfoBox(props: any) {
  const { containerClassName, containerSubClassName,infoBoxContentClassName, infoBoxTitleClassName, icon, header, content, detail, onClick } = props;
  const { t } = useTranslation();

  const infoBoxOnClick = onClick ? onClick : () => {};

  return (
    <div className={containerClassName} onClick={() => infoBoxOnClick()}>
      <div className={containerSubClassName}>

        {icon !== undefined ? (
          <Icon name={icon.name} className={icon.className} imageClassName={icon.imageClassName}  />
        ) : (
          <div />
        )}
        <div className={infoBoxContentClassName}><h3 className={infoBoxTitleClassName}>{t(header)}</h3> <p>{t(content)}</p></div>
        {detail !== undefined ? (
          <div>{detail}</div>
        ) : (
          <div/>
        )}
      </div>

    </div>
  );
}

InfoBox.propTypes = {
  containerClassName: PropTypes.string.isRequired,
  icon: PropTypes.any,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  detail: PropTypes.string,
  onClick: PropTypes.func,
  containerSubClassName: PropTypes.string,
  infoBoxContentClassName: PropTypes.string,
  infoBoxTitleClassName: PropTypes.string
};

export default InfoBox;
