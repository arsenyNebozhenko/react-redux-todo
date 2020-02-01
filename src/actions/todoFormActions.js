import { UPDATE_FORM_VALUE, TOGGLE_EXTEND_FORM } from "./types";

export const updateFormValue = (name, value) => dispatch => {
  dispatch({
    type: UPDATE_FORM_VALUE,
    payload: {
      name,
      value
    }
  })
}

export const toggleExtendForm = () => dispatch => {
  dispatch({
    type: TOGGLE_EXTEND_FORM
  })
}
