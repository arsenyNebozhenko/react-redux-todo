import { UPDATE_STATE, ADD_ITEM, DELETE_ITEM } from "./types";

export const updateState = (title) => ({
  type: UPDATE_STATE,
  payload: {
    title
  }
})

export const addItem = (todo) => ({
  type: ADD_ITEM,
  payload: {
    todo
  }
})

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
})
