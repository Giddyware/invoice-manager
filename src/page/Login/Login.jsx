import { DialogContent, DialogOverlay } from "@reach/dialog";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "@reach/dialog/styles.css";
import { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiCaretRight } from "react-icons/bi";
import { VisuallyHidden } from "@reach/visually-hidden";
import { useNavigate } from "react-router-dom";

import { Text } from "../../components/atoms";
import { FormField, FormFieldPassword } from "../../components/molecules";
import { auth, googleProvider } from "../../config/firebase";
import { AuthContext } from "../../components/auth";

export const Login = ({ showDialog, close }) => {
  const navigate = useNavigate();
  const { status, changeStatus } = useContext(AuthContext);

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
          minWidth: "880px",
          display: "flex",
          // height: "650px",
        }}
        //   className="test"
      >
        <button
          className="close-button"
          style={{
            position: "absolute",
            right: "5px",
            top: "6px",
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
            <h1 className="font-bold text-neutral-100 text-700">
              <BiCaretRight className="mb-3" />
              Digital platform for
              <span className="text-brand-400"> overseeing</span> your invoice
            </h1>
            <p className="text-neutral-100 m-3.5 text-100">
              You will never know everything <br /> But you will know more
            </p>
          </div>
        </div>
        <div className="flex-1 pl-20 pr-4 flex flex-col gap-5 overflow-x-hidden overflow-y-auto">
          <Text className="mb-3 text-3xl font-bold">Hey, hello👋</Text>
          <Text className="mb-8 text-gray-dark-61">
            It's great seeing you again, Welcome back😎
          </Text>

          <FormField
            type="email"
            name="email"
            label={"Email Address"}
            className="col-span-6 mt-10"
            autoComplete="username"
          />

          <FormFieldPassword
            name="password"
            label={"Password"}
            className="col-span-6"
            autoComplete="new-password"
          />

          <button
            type="button"
            className="text-neutral-100 bg-gradient-to-r from-[rgb(37,_99,_235)] to-[rgb(124,_58,_237)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2  w-full mt-4"
            onClick={signIn}
          >
            Login
          </button>

          <hr className="mb-[10px] p-0 border-brand-200 overflow-visible text-center after:content-['Or'] after:inline-block after:relative after:top-[-12px] after:bg-neutral-100 after:px-[16px]"></hr>

          <button
            type="button"
            onClick={signWithGoogle}
            className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full border-solid border-brand-600 border-2"
          >
            <AiFillGoogleCircle className="text-[28px]" />
            <span className="ml-3">SignIn with Google</span>
          </button>

          <div
            onClick={() => changeStatus()}
            className="flex cursor-pointer mt-4 items-center justify-center col-span-6 gap-4 text-200"
          >
            <Text>Don’t have an account?</Text>
            <Text>Signup</Text>
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};
