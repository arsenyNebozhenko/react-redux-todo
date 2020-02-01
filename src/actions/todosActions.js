import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM, EDIT_ITEM_TITLE, DISPLAY_ITEMS_BY_IMPORTANCE, } from './types'

export const addItem = (todo) => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      todo
    }
  })
}

export const deleteItem = (id) => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: {
      id
    }
  })
}

export const completeItem = (id) => dispatch => {
  dispatch({
    type: COMPLETE_ITEM,
    payload: {
      id
    }
  })
}

export const editItemTitle = (id, title) => dispatch => {
  dispatch({
    type: EDIT_ITEM_TITLE,
    payload: {
      id,
      title
    }
  })
}

export const displayItemsByImportance = (value) => dispatch => {
  dispatch({
    type: DISPLAY_ITEMS_BY_IMPORTANCE,
    payload: {
      value
    }
  })
}
