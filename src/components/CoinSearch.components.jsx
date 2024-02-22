import React, { useState } from "react";
import CoinItemComponents from "./CoinItem.components";

const CoinSearchComponents = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  // console.log(coins);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className=" rounded-div my-4">
      <div className=" flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className=" text-2xl font-bold my-2">Crypto Lists</h1>
        <form>
          <input
            className=" w-full bg-primary border border-input px-3 py-2 rounded-2xl shadow-xl"
            onChange={handleInputChange}
            type="text"
            placeholder="search coin"
          />
        </form>
      </div>

      <table className=" w-full border-collapse text-center">
        <thead>
          <tr className=" border-b">
            <th></th>
            <th className=" px-4">#</th>
            <th className=" text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className=" hidden md:table-cell">24h Volume</th>
            <th className=" hidden md:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((data) => {
              if (searchText === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return data;
              }
            })
            .map((coin) => (
              <CoinItemComponents key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearchComponents;
