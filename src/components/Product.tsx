import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ProductCard from "./ProductCard";
import { sortProduct } from "../store/slices/productSlice";
import { IProduct } from "../types/product.type";

const Product: React.FC = () => {
  const { products } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  return (
    <div id="product" className="my-[50px]">
      <div className="container">
        <div className="">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold">All Products</h1>
            <form className="max-w-sm">
              <select
                onChange={(e) => dispatch(sortProduct(e.target.value))}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose</option>
                <option value="all">All</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="high-low">Expensive to Cheap</option>
                <option value="low-high">Cheap to Expensive</option>
              </select>
            </form>
          </div>
          <div className="py-[40px] flex items-center flex-wrap gap-[88px]">
            {products.map((el: IProduct) => (
              <ProductCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
