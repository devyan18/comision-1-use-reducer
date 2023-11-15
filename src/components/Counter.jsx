import { useCounter2 } from "../hooks/useCounter";

const Counter = () => {
  const { counter, sumar, restar, reset } = useCounter2();

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Counter;
