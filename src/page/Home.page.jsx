import React from "react";
import { CoinSearchComponents, TrendingCoinsComponents } from "../components";

const HomePage = ({ coins }) => {
  // console.log(coins);
  return (
    <div>
      <CoinSearchComponents coins={coins} />
      <TrendingCoinsComponents />
    </div>
  );
};

export default HomePage;
