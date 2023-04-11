import { DialogContent, DialogOverlay } from "@reach/dialog";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import "@reach/dialog/styles.css";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiCaretRight } from "react-icons/bi";
import { VisuallyHidden } from "@reach/visually-hidden";
import { useNavigate } from "react-router-dom";

export const Authentication = ({ showDialog, close }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

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
          <button
            className="close-button"
            style={{
              position: "fixed",
              right: "250px",
              top: "44px",
              fontWeight: "bold",
              color: "hsl(231deg, 20%, 61%)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => navigate(-1)}
          >
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>X</span>
          </button>
          <div className="flex items-center justify-center flex-1 rounded-tl-lg rounded-bl-lg bgImg">
            {/* <h1 className="relative px-8 text-5xl font-bold text-neutral-100 max-w-min top-24 left-14 glass-effect py-14">
              <span className="">
                <BiCaretRight />
              </span>
              Digital plateform for{" "}
              <span className="text-brand-400"> overseeing</span> your invoice
            </h1> */}

            <div className="px-10 py-12 my-auto glass-effect w-80">
              {/* <div className=""> */}
              <h1 className="font-bold text-neutral-100 text-700">
                <BiCaretRight />
                Digital plateform for
                <span className="text-brand-400"> overseeing</span> your invoice
              </h1>
              <p className="text-neutral-100 m-3.5">
                You will never know everthing <br /> But you will know more
              </p>
            </div>
            {/* </div> */}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-gray-dark-63 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              <p className="mt-2 text-xs text-gray-dark-63 ">
                <span className="font-medium">Well done!</span> Some
                light-success message.
              </p>
            </div>
            <div className="mb-8">
              <div className="relative mb-2">
                <input
                  type="password"
                  aria-describedby=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-[1px] border-gray-dark-63 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-dark-63 peer"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-gray-dark-63 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>
              <p className="mt-2 text-xs text-gray-dark-63 ">
                <span className="font-medium">Well done!</span> Some
                light-success message.
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
              className="text-neutral-100 bg-gradient-to-br from-primary to-gray-dark-63 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full mt-4"
              onClick={signIn}
            >
              Login
            </button>
            <div className="my-10">
              <hr className="mb-[10px] p-0 border-brand-100 overflow-visible text-center after:content-['Or'] after:inline-block after:relative after:top-[-12px] after:bg-neutral-100 after:px-[16px]"></hr>
              {/* <span>Or</span> */}
              {/* <hr className="mb-[10px] p-0 border-brand-100  text-center"></hr> */}
            </div>
            <button
              type="button"
              onClick={signWithGoogle}
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
