import { AddItem, RemoveItem } from "../ActionsTypes";

export const addItemToCart = (data) => ({
  type: AddItem,
  payload: data,
});

export const removeItemFromCart = index =>({
    type: RemoveItem,
    payload: index,
})