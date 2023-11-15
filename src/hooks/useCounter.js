import { useReducer, useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);

  return { counter, sumar, restar };
};

// debe ser una función pura

const types = {
  sumar: "SUMAR",
  restar: "RESTAR",
  reset: "RESET",
};

// const reducer = (state, action) => {
//   if (action.type === types.sumar) {
//     return state + 1;
//   }

//   if (action.type === types.restar) {
//     return state - 1;
//   }

//   if (action.type === types.reset) return 0;

//   return state;
// };

const reducer = (state, action) => {
  switch (action.type) {
    case types.sumar:
      return state + 1;

    case types.restar:
      return state - 1;

    case types.reset:
      return 0;

    default:
      return state;
  }
};

export const useCounter2 = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  const sumar = () => dispatch({ type: types.sumar });
  const restar = () => dispatch({ type: types.restar });
  const reset = () => dispatch({ type: types.reset });

  return { counter, sumar, restar, reset };
};

// TODO: APRENDER BIEN ESTOS 3 HOOKS:
// useState, useEffect y useContext
