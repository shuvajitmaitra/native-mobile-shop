import { AddItem, RemoveItem } from "../ActionsTypes";

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case AddItem: {
      return [...state, action.payload];
    }
    case RemoveItem: {
      const deleteArray = action.payload.filter((item, index) => {
        return (index = action.payload);
      });
    }
    default: {
      return state;
    }
  }
};
