import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import DOMpurify from "dompurify";
import { useParams } from "react-router-dom";

const DetailCoinPage = () => {
  const [coinDetail, setCoinDetail] = useState([]);
  const params = useParams();

  const coinIdUrl = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(coinIdUrl).then((res) => {
      setCoinDetail(res.data);
    });
  }, [coinIdUrl]);

  return (
    <div className=" rounded-div my-12 py-8">
      <div className=" flex py-8">
        <img className=" w-20 mr-8" src={coinDetail.image?.large} alt="/" />
        <div className=" flex flex-col">
          {" "}
          <p className=" text-3xl font-bold">{coinDetail?.name} Price</p>
          <p>({coinDetail.symbol?.toUpperCase()}/USD)</p>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 gap-8">
        <div>
          <div className=" flex justify-between">
            {coinDetail.market_data?.current_price ? (
              <p className=" text-3xl font-bold">
                ${coinDetail.market_data?.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>

          <div>
            <Sparklines data={coinDetail.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>

          <div className=" flex justify-between py-4">
            <div>
              <p className=" text-gray-500 text-sm">Market Cap</p>
              {coinDetail.market_data?.market_cap ? (
                <p>{coinDetail.market_data?.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>

            <div>
              <p className=" text-gray-500 text-sm">Volume (24h)</p>
              {coinDetail.market_data?.market_cap ? (
                <p>
                  ${coinDetail.market_data.total_volume.usd.toLocaleString()}
                </p>
              ) : null}
            </div>
          </div>

          <div className=" flex justify-between py-4">
            <div>
              <p className=" text-gray-500 text-sm">24h High</p>
              {coinDetail.market_data?.high_24h ? (
                <p>${coinDetail.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>

            <div>
              <p className=" text-gray-500 text-sm">24h Low</p>
              {coinDetail.market_data?.low_24h ? (
                <p>${coinDetail.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="">
          <p className=" text-xl font-bold">Market Stats</p>
          <div className=" flex justify-between py-4">
            <div>
              <p className=" text-gray-500 text-sm">Market Rank</p>
              {coinDetail.market_cap_rank}
            </div>
            <div>
              <p className=" text-gray-500 text-sm">Hashing Algorithms</p>
              {coinDetail.hashing_algorithms ? (
                <p>{coinDetail.hashing_algorithms}</p>
              ) : null}
            </div>
            <div>
              <p className=" text-gray-500 text-sm">Trust Scores</p>
              {coinDetail.tickets ? (
                <p>{coinDetail.liquidity_score.toFixed(2)}</p>
              ) : null}
            </div>
          </div>

          <div className=" flex justify-between py-4">
            <div>
              <p className=" text-gray-500 text-sm">Price Change (24h)</p>
              {coinDetail.market_data ? (
                <p>
                  {coinDetail.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}
                </p>
              ) : null}
            </div>{" "}
            <div>
              <p className=" text-gray-500 text-sm">Price Change (7d)</p>
              {coinDetail.market_data ? (
                <p>
                  {coinDetail.market_data.price_change_percentage_7d.toFixed(2)}
                </p>
              ) : null}
            </div>
            <div>
              <p className=" text-gray-500 text-sm">Price Change (14d)</p>
              {coinDetail.market_data ? (
                <p>
                  {coinDetail.market_data.price_change_percentage_14d.toFixed(
                    2
                  )}
                </p>
              ) : null}
            </div>
            <div className=" flex justify-between py-4">
              <div>
                <p className=" text-gray-500 text-sm">Price Change (30d)</p>
                {coinDetail.market_data ? (
                  <p>{coinDetail.market_data.price_change_percentage_30d}</p>
                ) : null}
              </div>
              <div>
                <p className=" text-gray-500 text-sm">Price Change (60d)</p>
                {coinDetail.market_data ? (
                  <p>{coinDetail.market_data.price_change_percentage_60d}</p>
                ) : null}
              </div>
              <div>
                <p className=" text-gray-500 text-sm">Price Change (1y)</p>
                {coinDetail.market_data ? (
                  <p>{coinDetail.market_data.price_change_percentage_1y}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className=" flex justify-around p-8 text-accent">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* description */}

      <div className=" py-4">
        <p className=" text-xl font-bold">About {coinDetail.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMpurify.sanitize(
              coinDetail.description ? coinDetail.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default DetailCoinPage;
