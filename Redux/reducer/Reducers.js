import { AddItem, RemoveItem } from "../ActionsTypes";

export const Reducers = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case AddItem: {
      return [...state, action.payload];
    }
    case RemoveItem:
      const deleteArray = state.filter((item, index) => {
        console.log(action.payload);
        return index !== action.payload;
      });
      return deleteArray;

    default: {
      return state;
    }
  }
};
