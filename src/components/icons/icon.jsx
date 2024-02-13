import PropTypes from "prop-types";
import {
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconLinkedin,
  IconLogo,
} from ".";

const Icon = ({ name }) => {
  switch (name) {
    case "Bookmark":
      return <IconBookmark />;
    case "Codepen":
      return <IconCodepen />;
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
