export const TYPE_CHECKBOX_TOGGLED = 'TYPE_CHECKBOX_TOGGLED'

export const typeCheckboxToggled = (name, value) => (
  {
    type: TYPE_CHECKBOX_TOGGLED,
    payload: {
      value,
      name
    }
  }
)
