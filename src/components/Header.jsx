import { useState } from "react";
import { images } from "../constants";
import { Authentication } from "./auth";
// import { Auth } from "./auth";
import Icon from "./Icon";
import Logo from "./Logo";

const Header = () => {
  const [showDialog, setShowDialog] = useState(false);
  const close = () => setShowDialog(false);

  return (
    <div className="mb-[0px] flex items-center bg-brand-500 lg:flex-col lg:min-h-screen lg:rounded-tr-[22px]">
      <Logo />

      <div className="p-[20px] lg:mt-auto">
        <Icon className="" id="moon-icon" color="" size="" strokeWidth={""} />
      </div>
      <div className="border-l-[0.01px] h-[64px] border-[#494E6E] lg:hidden"></div>
      <hr className="w-[64px] text-[#494E6E] md:hidden sm:hidden"></hr>
      <div onClick={() => setShowDialog(true)} className="p-[18px]">
        <img
          className="rounded-full w-[32px]"
          src={images.AvatarImage}
          alt="link to the profile"
        />
      </div>

      <Authentication showDialog={showDialog} close={close} />
    </div>
  );
};
export default Header;
