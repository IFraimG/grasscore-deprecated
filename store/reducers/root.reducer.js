import Cookies from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";

const rootState = {
  isModal: false,
  auth: {
    email: null,
    id: null,
    name: null,
  },
  isAuth: false
}

const rootReducer = (state = rootState, action) => {
  switch (action.type) {
    case HYDRATE: return {...state, ...action.payload};
    case "SET_MODAL": {
      return { ...state, isModal: action.payload }
    }
    case "SET_AUTH": {
      // Cookies.set('dsUserID', action.payload.id, { expires: 2592e3 });
      // Cookies.set('dsUserEmail', action.payload.email, { expires: 2592e3 });

      return { ...state, auth: { ...action.payload }, isAuth: true }
    }

    case "GET_AUTH": {
      let id = Cookies.get('dsUserID');
      let email = Cookies.get('dsUserEmail');
    
      console.log(id);
      let isAuth = id == null ? false : true
      return { ...state, auth: { id, email }, isAuth }
    }
    default: return { ...state }
  }
}

export default rootReducer