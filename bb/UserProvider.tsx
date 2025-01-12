import React, { createContext, ReactNode, useContext, useReducer } from "react";
// סוגים לפרטי המשתמש
interface User {
  id:number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

// סוגים לפעולות Reducer
type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "UPDATE"; payload: Partial<User> };


// מצב התחלתי
const initialState: { user: User | null } = { user: null };

// Reducer לניהול פעולות
const userReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN":{
      console.log(action.payload);     
      return { user: action.payload };
    }
    case "LOGOUT":
      return { user: null };
    case "UPDATE":
      return { user: { ...state.user, ...action.payload } as User };
    default:
      return state;
  }
};


// יצירת Context
export const UserContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

// Provider ל-App
export const UserProvider = ({ children }:{ children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
