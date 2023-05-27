import { DialogContent, DialogOverlay } from "@reach/dialog";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import "@reach/dialog/styles.css";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiCaretRight } from "react-icons/bi";
import { VisuallyHidden } from "@reach/visually-hidden";
import { useNavigate } from "react-router-dom";
import { FormField, FormFieldPassword } from "./molecules";
import RegisterForm from "./organisms/Register";
import { Text } from "./atoms";

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
            position: "absolute",
            right: "20px",
            top: "22px",
            fontWeight: "bold",
            color: "hsl(231deg, 20%, 61%)",
            width: "30px",
            height: "30px",
          }}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>X</span>
        </button>

        <div className="flex items-center md:inline-flex sm:hidden justify-center flex-1 rounded-tl-lg rounded-bl-lg bgImg">
          <div className="px-10 py-12 my-auto glass-effect w-80">
            {/* <div className=""> */}
            <h1 className="font-bold text-neutral-100 text-700">
              <BiCaretRight />
              Digital plateform for
              <span className="text-brand-400"> overseeing</span> your invoice
            </h1>
            <p className="text-neutral-100 m-3.5 text-100">
              You will never know everthing <br /> But you will know more
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="flex-1 pl-20 pr-2 my-auto">
          <h2 className="mb-3 text-3xl font-bold">Hey, hello👋</h2>
          <Text className="mb-8 text-gray-dark-61">
            Enter the infomation you entered while registering
          </Text>

          <div className="mb-8">
            <div className="relative mb-2">
              <FormField
                type="email"
                name="email"
                label={"Email Address"}
                className="col-span-6 mt-10"
                autoComplete="username"
              />
            </div>
          </div>
          <div className="mb-8 relative">
            <FormFieldPassword
              name="password"
              label={"Password"}
              className="col-span-6"
              autoComplete="new-password"
            />
          </div>

          <button
            type="button"
            className="text-neutral-100 bg-gradient-to-r from-[rgb(37,_99,_235)] to-[rgb(124,_58,_237)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2  w-full mt-4"
            onClick={signIn}
          >
            Login
          </button>
          <div className="my-10">
            <hr className="mb-[10px] p-0 border-brand-200 overflow-visible text-center after:content-['Or'] after:inline-block after:relative after:top-[-12px] after:bg-neutral-100 after:px-[16px]"></hr>
            {/* <span>Or</span> */}
            {/* <hr className="mb-[10px] p-0 border-brand-100  text-center"></hr> */}
          </div>
          <button
            type="button"
            onClick={signWithGoogle}
            className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full border-solid border-brand-600 border-2"
          >
            <AiFillGoogleCircle className="text-[28px]" />
            <span className="ml-3">SignIn with Google</span>
          </button>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export const SignUp = () => {
  return <div>SignUp</div>;
};
