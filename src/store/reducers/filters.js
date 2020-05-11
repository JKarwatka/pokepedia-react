import { TYPE_CHECKBOX_TOGGLED } from '../actions/actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE_CHECKBOX_TOGGLED: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }
  }
  return state
}
