import React, { useReducer } from 'react';
import { UserContext, initialState } from './state';
import Reducer from './reducer';
import ActionTypes from './actions';

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setUser = (user) => {
    dispatch({ type: ActionTypes.SET_USER, payload: user });
  };

  const unsetUser = () => {
    dispatch({ type: ActionTypes.UNSET_USER });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
        unsetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
