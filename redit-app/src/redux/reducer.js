import { REQUEST, ERRO, RESP } from "./actions"

const INITIAL_STATE = {
  lista: [],
  load: false,
  error: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        load: true,
      }
    case RESP:
      return {
        ...state,
        lista: action.payload,
        load: false,
      }
    case ERRO:
      return {
        ...state,
        load: false,
        error: [...state.error, action.payload],
      }
    default:
      return state;
  }
}

export default reducer;



