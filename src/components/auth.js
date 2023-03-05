import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { AiFillGoogleCircle, AiOutlineCheckSquare } from "react-icons/ai";
import { BiCaretRight } from "react-icons/bi";

import { FiArrowDownRight, FiBox } from "react-icons/fi";
import CheckboxSelect from "./CheckboxSelect";

let graditentStyle = {
  fontSize: "12px",
  background: "linear-gradient(#eee, #333)",
  backgroundClip: "text",
  textFfillColor: "transparent",
};

let hjd = "bg-gradient-to-bl from-[#0F172A] via-[#6366F1] to-[#F0ABFC]";

export const Auth = () => {
  let showDialog;
  let close;
  return (
    <div>
      <DialogOverlay isOpen={showDialog} onDismiss={close}>
        <DialogContent
          style={{
            borderRadius: "8px",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            margin: "38px auto",
            width: "880px",
            display: "flex",
            // height: "650px",
          }}
          //   className="test"
        >
          <div className="flex-1 rounded-tl-lg rounded-bl-lg bgImg">
            <h1 className="text-[white] font-bold text-5xl max-w-min relative top-24 left-14 glass-effect px-8 py-14">
              <span className="">
                <BiCaretRight />
              </span>
              Digital plateform for{" "}
              <span className="text-primary-light"> overseeing</span> your
              invoice
            </h1>
          </div>
          <div className="flex-1 pl-20 pr-2 my-auto">
            <h2 className="mb-3 text-3xl font-bold">Hey, hello👋</h2>
            <p className="mb-8 text-gray-dark-61">
              Enter the infomation you entered while registering
            </p>

            <div className="mb-8">
              <div className="relative mb-2">
                <input
                  type="email"
                  aria-describedby=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-[1px] border-gray-dark-63 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-dark-63 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-gray-dark-63 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[white] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              <p className="mt-2 text-xs text-gray-dark-63 ">
                <span className="font-medium">Well done!</span> Some success
                message.
              </p>
            </div>
            <div className="mb-8">
              <div className="relative mb-2">
                <input
                  type="password"
                  aria-describedby=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-[1px] border-gray-dark-63 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-dark-63 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-gray-dark-63 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[white] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>
              <p className="mt-2 text-xs text-gray-dark-63 ">
                <span className="font-medium">Well done!</span> Some success
                message.
              </p>
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label className="ml-1" htmlFor="">
                Remember me
              </label>

              <h1 className="ml-auto font-bold forget-button-gradient">
                Forgot password?
              </h1>
            </div>
            <button
              type="button"
              className="text-[white] bg-gradient-to-br from-primary to-gray-dark-63 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full mt-4"
            >
              Login
            </button>
            <div className="my-10">
              <hr className="mb-[10px] p-0 border-gray-light overflow-visible text-center after:content-['Or'] after:inline-block after:relative after:top-[-12px] after:bg-[white] after:px-[16px]"></hr>
              {/* <span>Or</span> */}
              {/* <hr className="mb-[10px] p-0 border-gray-light  text-center"></hr> */}
            </div>
            <button
              type="button"
              className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full border-solid border-primary border-2"
            >
              <AiFillGoogleCircle className="text-[28px]" />
              <span className="ml-3">Sign with Google</span>
            </button>
          </div>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};
