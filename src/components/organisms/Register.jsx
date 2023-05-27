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
  const [confirmPassword, setConfirmPassword] = useState("");

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
            {/* <div className=""> */}
            <h1 className="font-bold text-neutral-100 text-700">
              <BiCaretRight className="mb-3" />
              Digital platform for
              <span className="text-brand-400"> overseeing</span> your invoice
            </h1>
            <p className="text-neutral-100 m-3.5 text-100">
              You will never know everything <br /> But you will know more
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="flex-1 pl-20 pr-2  flex flex-col gap-5 overflow-y-auto overflow-x-hidden">
          <Text className="mb-3 text-3xl font-bold">Hey, hello👋</Text>
          <Text className="mb-8 text-gray-dark-61">
            Enter the information you entered while registering
          </Text>

          <FormField
            type="text"
            name="userName"
            label={"User Name"}
            className="col-span-6"
            autoComplete="userName"
          />

          <FormField
            type="email"
            name="email"
            label={"Email Address"}
            className="col-span-6"
            autoComplete="username"
          />

          <FormFieldPassword
            name="password"
            label={"Password"}
            className="col-span-6"
            autoComplete="new-password"
          />

          <FormFieldPassword
            name="confirmPassword"
            label={"Confirm Password"}
            className="col-span-6"
            autoComplete="new-password"
          />

          <button
            type="button"
            className="text-neutral-100 bg-gradient-to-r from-[rgb(37,_99,_235)] to-[rgb(124,_58,_237)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2  w-full mt-4"
            onClick={signIn}
          >
            SignUp
          </button>
          <div
            onClick={() => changeStatus()}
            className="flex mt-4 items-center cursor-pointer justify-center col-span-6 gap-4 text-200"
          >
            <Text>Already have an account?</Text>
            <Text>Login</Text>
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};
export default RegisterForm;
