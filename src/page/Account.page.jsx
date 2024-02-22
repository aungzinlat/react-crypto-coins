import React, { useContext } from "react";
import { SavedCoinsComponents } from "../components";
import { UserContext } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const AccountPage = () => {
  const { user, logOut } = useContext(UserContext);
  const nav = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      nav("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className=" max-w-[1140px] mx-auto">
        <div className=" rounded-div flex justify-between items-center my-12 py-8">
          <div className=" flex flex-col gap-3">
            <h1 className=" text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome , {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className=" border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="rounded-div flex justify-between items-center my-12 py-8 ">
          <div className=" w-full min-h-[300px]">
            <h1 className=" text-2xl font-bold py-4">
              <SavedCoinsComponents />
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/signin"} />;
  }
};

export default AccountPage;
