import { UPDATE_TITLE, ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM, TOGGLE_EXTEND_FORM, UPDATE_DESCRIPTION } from "./types";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  payload: {
    title
  }
})

export const updateDescription = (description) => ({
  type: UPDATE_DESCRIPTION,
  payload: {
    description
  }
})

export const toggleExtendForm = () => ({
  type: TOGGLE_EXTEND_FORM
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

export const completeItem = (id) => ({
  type: COMPLETE_ITEM,
  payload: {
    id
  }
})
