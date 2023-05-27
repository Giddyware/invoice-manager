import { VisuallyHidden } from "@reach/visually-hidden";
import { BiCaretRight } from "react-icons/bi";
import { Text } from "../atoms";
import { FormField, FormFieldPassword } from "../molecules";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../auth";

const RegisterForm = ({ close, showDialog }) => {
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
        <div className="flex-1 pl-20 pr-2 overflow-y-auto">
          <h2 className="mb-3 text-3xl font-bold">Hey, hello👋</h2>
          <Text className="mb-8 text-gray-dark-61">
            Enter the infomation you entered while registering
          </Text>

          <div className="mb-8">
            <div className="relative mb-2">
              <FormField
                type="text"
                name="userName"
                label={"User Name"}
                className="col-span-6 mt-10"
                autoComplete="userName"
              />
            </div>
          </div>
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
          <div className="mb-8 relative">
            <FormFieldPassword
              name="confirmPassword"
              label={"Confirm Password"}
              className="col-span-6"
              autoComplete="new-password"
            />
          </div>

          <button
            type="button"
            className="text-neutral-100 bg-gradient-to-r from-[rgb(37,_99,_235)] to-[rgb(124,_58,_237)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2  w-full mt-4"
            onClick={signIn}
          >
            SignUp
          </button>
          <div className="flex mt-4 items-center justify-center col-span-6 gap-4 text-200">
            <p>Already have an account?</p>
            <div
              className="text-blue-500 cursor-pointer"
              onClick={() => changeStatus()}
            >
              Login
            </div>
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};
export default RegisterForm;
