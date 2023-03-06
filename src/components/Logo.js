import { Link } from "react-router-dom";
import { images } from "../constants";

const Logo = (props) => {
  return (
    <Link {...props} to="/" className="mr-auto p-[23px] isolate">
      <img
        className="absolute top-0 left-0 z-[-1]"
        src={images.logoBg}
        alt=""
      />
      <img src={images.logo} alt="route to homepage" />
    </Link>
  );
};

export default Logo;
