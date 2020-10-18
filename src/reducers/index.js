let initialState = {}
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "TEXT_TITLE": {
      return { ...state, title: action.payload }
    }
    case "TEXT_LEFT": {
      return { ...state, left: action.payload }
    }
    case "TEXT_RIGHT": {
      return { ...state, right: action.payload }
    }

    default: {

      return state
    }
  }
}