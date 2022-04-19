import React from 'react';

export const AppContext = React.createContext();

export function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  }

  let [state, dispatch] = React.useReducer(reducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

const initialState = {
  auth: {
    user: null
  },
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const loggedIn = (user) => ({
  type: 'LOGGED_IN',
  user
});

const reducer = (state, action) => {

  switch (action.type) {
    case 'LOGOUT': {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: null
        } 
      }
    }
    case 'LOGGED_IN': {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: action.user
        }
      }
    }
    return state;
  }
};

export const getUser = (state) => state.user;