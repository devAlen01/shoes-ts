import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { IProduct } from "../types/product.type";
import { createProduct } from "../store/slices/productSlice";

const Admin = () => {
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<IProduct>({
    title: "",
    image: "",
    price: "",
    description: "",
    category: "",
  });

  const addProduct = (): void => {
    if (
      values.category &&
      values.description &&
      values.image &&
      values.price &&
      values.title !== ""
    ) {
      const newProd = {
        ...values,
        id: Date.now(),
        rating: Math.floor(Math.random() * 5),
      };
      dispatch(createProduct(newProd));
      setValues({
        title: "",
        image: "",
        price: "",
        description: "",
        category: "",
      });
    } else {
      alert("error");
    }
  };

  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="">
          <h1 className="text-white text-center text-2xl font-bold">
            Create Product!
          </h1>
          <div className="w-[50%] mx-auto h-[60vh] flex flex-col gap-3">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={({ target }) =>
                  setValues({ ...values, image: target.value })
                }
                value={values.image}
                type="text"
                name="image"
                id="image"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image URL
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
                value={values.title}
                type="text"
                name="title"
                id="title"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="title"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
                value={values.description}
                type="text"
                name="description"
                id="description"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }
                value={values.price}
                type="text"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <select
              onChange={(e) =>
                setValues({ ...values, category: e.target.value })
              }
              value={values.category}
              id="category"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option disabled value="">
                Choose a category
              </option>
              <option value="MAN">MAN</option>
              <option value="WOMAN">WOMAN</option>
              <option value="KIDS">KIDS</option>
            </select>
            <button
              onClick={addProduct}
              type="button"
              className="my-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
