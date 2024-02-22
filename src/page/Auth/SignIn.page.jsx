import React, { useContext, useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useContext(UserContext);
  const nav = useNavigate();

  const handleOnchange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await signIn(formData.email, formData.password);
      nav("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className=" w-full block md:flex items-center justify-center">
      <div className=" max-w-lg w-full h-[600px] md:h-auto mx-auto px-0 md:px-4 py-20 md:py-10 shadow-none md:shadow-xl rounded-lg">
        <h1 className=" text-center text-2xl font-bold">Sign In </h1>
        <form onSubmit={handleSignIn}>
          <div className=" my-4">
            <label htmlFor="email">Email</label>
            <div className=" my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handleOnchange}
                className=" w-full p-3 bg-primary border border-input rounded-xl"
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />{" "}
              <AiOutlineMail className=" absolute right-2 top-4 text-gray-400" />
            </div>
          </div>

          <div className=" my-4">
            <label htmlFor="password">Password</label>
            <div className=" my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handleOnchange}
                className=" w-full p-3 bg-primary border border-input rounded-xl"
                type="password"
                id="password"
                name="password"
                placeholder="●●●●●●●●"
              />{" "}
              <AiFillLock className=" absolute right-2 top-4 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className=" my-2 py-3 w-full bg-button text-btnText rounded-2xl shadow-xl"
          >
            Sign In
          </button>
        </form>
        <p className=" my-4">
          Don't you have an account ?{" "}
          <Link className=" text-accent hover:underline" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
