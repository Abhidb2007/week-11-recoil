import { useRecoilState, atom } from "recoil";
import { RecoilRoot } from "recoil";

// Counter Atom (Global state with Recoil)
const counterAtom = atom({
  key: "counterAtom",
  default: 0,
});

function App() {
  return (
    <RecoilRoot>
      <div style={{ textAlign: "center", marginTop: "3px", color: "green" }}>
        <Buttons />
        <Counter />
        <IsEven />
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(counterAtom);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Counter() {
  const [count] = useRecoilState(counterAtom);
  return <h2>{count}</h2>;
}

function IsEven() {
  const [count] = us
