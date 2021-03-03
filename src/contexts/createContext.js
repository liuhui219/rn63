import React, {
  useReducer,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import {storage} from '@@/utils/Storage';

export default (reducer, initialState, Fn) => {
  
  const Context = React.createContext();

  const Provider = ({children}) => {
    console.log(111);
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      console.log(222);
    }, []);

    return (
      <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    );
  };

  return {Context, Provider};
};
