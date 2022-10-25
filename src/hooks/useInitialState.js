import { useState } from 'react';

const initialState = {
  cart: [],
  actualProduct: [],
  stateViewMyOrder: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((item, index) => index != indexValue),
    });
  };

  const addToActualProduct = (payload) => {
    setState({
      ...state,
      actualProduct: [true, payload],
    });
  };

  const removeFromActualProduct = () => {
    setState({
      ...state,
      actualProduct: [false],
    });
  };

  const toggleMyOrder = (newState) => {
    setState({
      ...state,
      stateViewMyOrder: newState,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToActualProduct,
    removeFromActualProduct,
    toggleMyOrder,
  };
};

export default useInitialState;
