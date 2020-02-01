import { UPDATE_FORM_VALUE, ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM, TOGGLE_EXTEND_FORM, EDIT_ITEM_TITLE } from "./types";

export const updateFormValue = (name, value) => ({
  type: UPDATE_FORM_VALUE,
  payload: {
    name,
    value
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

export const editItemTitle = (id, title) => ({
  type: EDIT_ITEM_TITLE,
  payload: {
    id,
    title
  }
})
