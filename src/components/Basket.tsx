import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  addToBasket,
  decrement,
  removeElBAsket,
} from "../store/slices/basketSlice";

const Basket: React.FC = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="container">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {basket?.map((el, index) => (
              <tbody key={index}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img
                      src={el.image}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="img"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {el.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => dispatch(decrement(el))}
                        className="text-2xl p-2"
                      >
                        -
                      </button>
                      <span className="text-xl">{el.quantity}</span>
                      <button
                        onClick={() => dispatch(addToBasket(el))}
                        className="text-xl p-2"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${+el.price * (el.quantity || 0)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => dispatch(removeElBAsket(el.id))}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Basket;
