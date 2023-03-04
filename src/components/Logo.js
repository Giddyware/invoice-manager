import { images } from "../constants";

const Logo = (props) => {
  return (
    <a className="no-underline " href="/">
      <div {...props}>
        <img src={images.logo} alt="route to homepage" />
      </div>
    </a>
  );
};

export default Logo;
