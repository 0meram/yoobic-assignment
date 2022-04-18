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

export const AppContextConsumer = AppContext.Consumer;

const reducer = (state, action) => {

  switch (action.type) {
    case 'LOGOUT': {
      return {
        ...state,
        playing: null,
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

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    // console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    // console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    // console.log("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state,action));
    return reducer(state,action);
  };

  return reducerWithLogger;
}

const loggerReducer = logger(reducer);

const initialState = {
  auth: {
    user: null
  },
  movies: {
    tracks: [
      {
        id: '0',
        title: 'Hey Jude',
        artist: 'The Beatles',
        img: 'music/hey-jude.jpg',
        time: 359000
      },
      {
        id: '1',
        title: 'Hound Dog',
        artist: 'Elvis Presley',
        img: 'music/hound-dog.jpg',
        time: 216000
      },
      {
        id: '2',
        title: 'Good Vibrations',
        artist: 'The Beach Boys',
        img: 'music/good-vibrations.jpg',
        time: 339000
      },
      {
        id: '3',
        title: 'I Walk The Line',
        artist: 'Johnny Cash',
        img: 'music/i-walk-the-line.jpg',
        time: 257000
      },
      {
        id: '4',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        img: 'music/bohemian-rhapsody.jpg',
        time: 555000
      },
      {
        id: '5',
        title: 'Don\'t Stop Believin\'',
        artist: 'Journey',
        img: 'music/dont-stop-believin.jpg',
        time: 411000
      },
      {
        id: '6',
        title: 'Hit Me with Your Best Shot',
        artist: 'Pat Benetar',
        img: 'music/hit-me-with-your-best-shot.jpg',
        time: 251000
      },
      {
        id: '7',
        title: 'Sweet Home Alabama',
        artist: 'Lynyrd Skynyrd',
        img: 'music/sweet-home-alabama.jpg',
        time: 444000
      },
    ],
  },
};


export const logout = () => ({
  type: 'LOGOUT'
});

export const loggedIn = (user) => ({
  type: 'LOGGED_IN',
  user
});

export const getTracks = (state) => state.movies.tracks;
export const getUser = (state) => state.user;