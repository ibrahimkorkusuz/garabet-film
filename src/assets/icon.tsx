import PropTypes from "prop-types";
import getIcon from "./getIcon";

const Icon = (props: any) => {
  return getIcon(props.name, props);
};

Icon.propTypes = {
  /** The string name of the icon to display */
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageClassName:PropTypes.string
};

export default Icon;
