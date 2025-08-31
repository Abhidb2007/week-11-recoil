import { memo } from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

const Counter = memo(function Counter() {
  const [count, setCount] = useRecoilState(countState);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
});

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

export default App;
