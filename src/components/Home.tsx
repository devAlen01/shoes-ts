import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const Home: React.FC = () => {
  let nav = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="h-[470px]"></div>
        <div className="flex items-center gap-10 justify-center">
          <button
            onClick={() => nav("/admin")}
            className="text-xl font-bold w-[180px] h-[50px] bg-white text-black"
          >
            ADD TO CART
          </button>
          <a href="#product">
            <button className="text-xl font-bold w-[180px] h-[50px] bg-black text-white border-2 border-solid border-white">
              BUY NOW
            </button>
          </a>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
