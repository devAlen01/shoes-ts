import React from "react";
import { IProduct } from "../types/product.type";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAppDispatch } from "../hooks/redux";
import { removeProduct } from "../store/slices/productSlice";
import { addToBasket } from "../store/slices/basketSlice";

const ProductCard: React.FC<IProduct> = (props) => {
  const { title, image, price, rating, id } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <span
        onClick={() => dispatch(removeProduct(id))}
        className="text-3xl absolute top-[-10px] right-[-10px] text-red-500 cursor-pointer"
      >
        <IoCloseCircleOutline />
      </span>
      <div className=" mx-4 mt-4 h-[350px] overflow-hidden rounded-xl bg-white flex justify-center ">
        <img src={image} alt="img" className="h-full w-full object-cover" />
      </div>

      <div className="px-5 pb-5 py-3">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {rating ? (
            <div className="flex items-center gap-[2px]">
              <div
                className="star"
                style={{ background: rating >= 1 ? "gold" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: rating >= 2 ? "gold" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: rating >= 3 ? "gold" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: rating >= 4 ? "gold" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: rating >= 5 ? "gold" : "gray" }}
              ></div>
            </div>
          ) : null}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            onClick={() => dispatch(addToBasket(props))}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
