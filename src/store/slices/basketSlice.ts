import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialBasketTyp, IProduct } from "../../types/product.type";

const initialState: InitialBasketTyp = {
  basket: JSON.parse(localStorage.getItem("basket") as string) || [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<IProduct>) {
      const findBas = state.basket.find((el) => el.id === action.payload.id);
      if (findBas) {
        findBas.quantity = (findBas.quantity || 0) + 1;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeElBAsket(state, action: PayloadAction<number | undefined>) {
      let delProduct = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(delProduct));
      state.basket = delProduct;
    },
    decrement(state, action: PayloadAction<IProduct>) {
      state.basket = state.basket.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              quantity:
                (el.quantity || 0) > 1
                  ? (el.quantity || 0) - 1
                  : (el.quantity = 1),
            }
          : el
      );
    },
  },
});

export const { addToBasket, removeElBAsket, decrement } = basketSlice.actions;

export default basketSlice.reducer;
