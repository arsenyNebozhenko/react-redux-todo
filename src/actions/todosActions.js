import { ADD_ITEM, DELETE_ITEM, DISPLAY_ITEMS_BY_IMPORTANCE, DETECT_ITEMS_FAILURE, SET_ITEM_PROP } from './types'

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

export const displayItemsByImportance = (value) => dispatch => {
  dispatch({
    type: DISPLAY_ITEMS_BY_IMPORTANCE,
    payload: {
      value
    }
  })
}

export const detectItemsFailure = () => dispatch => {
  dispatch({
    type: DETECT_ITEMS_FAILURE
  })
}

export const setItemProp = (id, key, value) => dispatch => {
  dispatch({
    type: SET_ITEM_PROP,
    payload: {
      id,
      key,
      value
    }
  })
}
