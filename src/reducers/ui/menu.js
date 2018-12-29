import menuTypes from '../../actions/ui/menu.types'

const { TOGGLE } = menuTypes

const initialState = {
  isOpen: false,
}

const menu = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
}

export { initialState, menu }
