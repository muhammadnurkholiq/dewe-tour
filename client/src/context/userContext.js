import { createContext, useReducer } from 'react'

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    user: {
        fullname: "",
        email: "",
        gender: "",
        phone: "",
        address: "",
        role: "",
        avatar: "",
    },
}

// create context
// create context
export const AuthContext = createContext();

// reducer use to handle complex logic, use wisely
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "AUTH_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        isLoading: false,
        isLogin: true,
        user: payload,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        isLoading: false,
        isLogin: false,
        user: {
          fullname: "",
          email: "",
          gender: "",
          phone: "",
          address: "",
          role: "",
          avatar: "",
        },
      };
    default:
      throw new Error("type doesn't match cases");
  }
}

export const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )

}