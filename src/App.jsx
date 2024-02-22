import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AccountPage,
  DetailCoinPage,
  HomePage,
  SignInPage,
  SignUpPage,
} from "./page";
import PageHeaderLayouts from "./layouts/PageHeader.layouts";
import { api } from "./service/Api";
import { FooterComponents } from "./components";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    (async () => {
      await api.get("").then((res) => {
        setCoins(res.data);
      });
    })();
  }, []);

  return (
    <AuthContextProvider>
      {" "}
      <Router>
        <PageHeaderLayouts />
        <Routes>
          <Route path="/" element={<HomePage coins={coins} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/coin/:coinId" element={<DetailCoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <FooterComponents />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
