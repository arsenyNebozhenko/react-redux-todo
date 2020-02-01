import { UPDATE_FILTER_FORM_VALUE } from './types'

export const updateFilterFormValue = (value) => dispatch => {
  dispatch({
    type: UPDATE_FILTER_FORM_VALUE,
    payload: {
      value
    }
  })
}
