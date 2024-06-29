import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateType, IProduct } from "../../types/product.type";

let product = [
  {
    title: "Air Max Training Shoes",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20221025/ex6J/6357f5c5f997ddfdbd3e830e/-1117Wx1400H-469258173-black-MODEL.jpg",
    price: "200",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "KIDS",
    rating: 3,
    id: 1,
  },
  {
    title: "Nike Interact Run",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9542e6b-db03-4ef3-8df5-7eb07de98020/interact-run-mens-road-running-shoes-2pmmcR.png",
    price: "58",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "MAN",
    rating: 4,
    id: 2,
  },
  {
    title: "Nike Air Max 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d8625e3-cecb-47d8-8dd0-b1f2bc36b1a7/air-max-1-87-womens-shoes-0vW0ds.png",
    price: "112",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "MAN",
    rating: 5,
    id: 3,
  },
  {
    title: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/afa28618-22d4-4792-9cc5-704caad468a6/air-force-1-07-womens-shoes-xK1ZBw.png",
    price: "212",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "WOMAN",
    rating: 3,
    id: 4,
  },
  {
    title: "Air Max Training Shoes",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20221025/ex6J/6357f5c5f997ddfdbd3e830e/-1117Wx1400H-469258173-black-MODEL.jpg",
    price: "200",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "KIDS",
    rating: 3,
    id: 5,
  },
  {
    title: "Nike Interact Run",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9542e6b-db03-4ef3-8df5-7eb07de98020/interact-run-mens-road-running-shoes-2pmmcR.png",
    price: "58",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "MAN",
    rating: 4,
    id: 6,
  },
  {
    title: "Nike Air Max 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d8625e3-cecb-47d8-8dd0-b1f2bc36b1a7/air-max-1-87-womens-shoes-0vW0ds.png",
    price: "112",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "MAN",
    rating: 5,
    id: 7,
  },
  {
    title: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/afa28618-22d4-4792-9cc5-704caad468a6/air-force-1-07-womens-shoes-xK1ZBw.png",
    price: "212",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor sunt consequatur officiis blanditiis impedit, earum accusamus quasi eos, maxime, eius nesciunt sed similique. Sapiente, ex. Repudiandae dolor praesentium, quo molestiae illo consequatur, vero quidem dolorum ipsam laboriosam quas, eum voluptas qui! Nobis modi dolores officiis odit distinctio ab, eum aspernatur.",
    category: "WOMAN",
    rating: 3,
    id: 8,
  },
];

const initialState: InitialStateType = {
  products: JSON.parse(localStorage.getItem("products") as string) && product,
  search: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<IProduct>) => {
      const newProduct = action.payload;
      state.products = [...state.products, newProduct];
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    sortProduct(state, action: PayloadAction<string>) {
      if (action.payload === "A-Z") {
        state.products = state.products.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else if (action.payload === "Z-A") {
        state.products = state.products.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      } else if (action.payload === "high-low") {
        state.products = state.products.sort((a, b) => +a.price - +b.price);
      } else if (action.payload === "low-high") {
        state.products = state.products.sort((a, b) => +b.price - +a.price);
      } else if (action.payload === "all") {
        return initialState;
      }
    },
    removeProduct(state, action: PayloadAction<number | undefined>) {
      let delEl = state.products.filter((el) => el.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(delEl));
      state.products = delEl;
    },
    searchProduct(state, action: PayloadAction<string>) {
      state.search = state.products.filter((el) =>
        el.title
          .trim()
          .toLowerCase()
          .includes(action.payload.trim().toLowerCase())
      );
    },
  },
});

export const { createProduct, sortProduct, removeProduct, searchProduct } =
  productSlice.actions;

export default productSlice.reducer;
