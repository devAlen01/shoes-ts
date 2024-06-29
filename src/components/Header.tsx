import React, { useState } from "react";
import logo from "../assets/images/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../hooks/redux";
import { searchProduct } from "../store/slices/productSlice";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [values, setValues] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="py-[30px] z-20 bg-transparent">
      <div className="">
        <div className="flex items-center justify-around ">
          <img width={170} src={logo} alt="img" />
          <div className="flex items-center gap-11">
            <Link to={"/"} className="text-lg text-white font-bold">
              HOME
            </Link>
            <Link to={"/man"} className="text-lg text-white font-bold">
              MAN
            </Link>
            <Link to={"/woman"} className="text-lg text-white font-bold">
              WOMAN
            </Link>
            <Link to={"/kids"} className="text-lg text-white font-bold">
              KIDS
            </Link>
            <Link to={"/sale"} className="text-lg text-white font-bold">
              SALE
            </Link>
          </div>

          <div className="flex items-center gap-7">
            <input
              onChange={(e) => setValues(e.target.value)}
              onKeyDown={(values: React.KeyboardEvent<HTMLInputElement>) => {
                const target = values.target as HTMLInputElement;
                const value = target.value.trim();
                if (values.key === "Enter") {
                  if (value) {
                    dispatch(searchProduct(value));
                    navigate("/search");
                  } else {
                    navigate("/");
                  }
                }
              }}
              value={values}
              type="text"
              placeholder=" Search..."
              className="absolute w-[190px] z-[8px] h-[30px] rounded-lg bg-transparent px-1 border-2"
              style={{
                right: searchInput ? "220px" : "0",
                opacity: searchInput ? "1" : "0",
                transition: "0.4s",
              }}
            />
            <button
              onClick={() => setSearchInput(!searchInput)}
              className="text-2xl text-white cursor-pointer z-10"
            >
              <IoSearch />
            </button>
            <Link
              to="/basket"
              className="text-2xl text-white cursor-pointer z-10"
            >
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
