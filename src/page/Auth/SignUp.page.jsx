import React, { useContext, useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signUp } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await signUp(formData.email, formData.password);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className=" w-full block md:flex items-center justify-center">
      <div className=" max-w-lg w-full h-[600px] md:h-auto mx-auto px-0 md:px-4 py-20 md:py-10 shadow-none md:shadow-xl rounded-lg">
        <h1 className=" text-center text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className=" my-4">
            <label htmlFor="email">Email</label>
            <div className=" my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={handleChange}
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
                onChange={handleChange}
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
            Sign Up
          </button>
        </form>
        <p className=" my-4">
          Already have an account ?{" "}
          <Link className=" text-accent hover:underline" to={"/signin"}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
