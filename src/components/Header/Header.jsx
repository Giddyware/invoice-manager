import { images } from "../../constants";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="mb-[0px] flex items-center bg-gray-dark-27">
      <div className="mr-auto p-[24px] isolate">
        <img
          className="absolute top-0 left-0 z-[-1]"
          src={images.logoBg}
          alt=""
        />
        <Logo />
      </div>
      <div className="p-[30px]">
        <Icon className="" id="moon-icon" color="" size="" strokeWidth={""} />
      </div>
      <div className="border-l-4 border-indigo-500"></div>
      <div className="p-[24px]">
        <img
          className="rounded-full w-[32px]"
          src={images.AvatarImage}
          alt="link to the profile"
        />
      </div>
    </div>
  );
};
export default Header;
