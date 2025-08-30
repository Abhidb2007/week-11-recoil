import { RecoilRoot, atom, useRecoilState } from "recoil";
import "./App.css";

// define atom (global state)
const countState = atom({
  key: "countState",
  default: 0,
});

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const [count] = useRecoilState(countState);
  return <h2>Count: {count}</h2>;
}

function Increase() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increase
    </button>
  );
}

function Decrease() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <button onClick={() => setCount(c => c - 1)}>
      Decrease
    </button>
  );
}

export default App;
