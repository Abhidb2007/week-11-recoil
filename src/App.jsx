import {useEffect,useState,memo} from "react"
import"./App.css"
import { RecoilRoot } from "recoil";
function App(){
  return(
    <div>
      <RecoilRoot>
        <Buttons/>
        <Counter/> 
        <IsEven/>
      </RecoilRoot>
    </div>
  )
}
function Buttons(){
  const setCount=useSetRecoilState(counterAtom);
  function increase(){
    setCount(c=>c+1)
  }
  function decrease(){
    setCount(c=>c-1)
  }
  return(
    <div>
     <buttton onClick={increase}>Increase</buttton>
     <button onClick={decrease}>Decrease</button>
    </div>
  )

}
function Counter(){
  const count=useRecoilValue(counterAtom);
  return<div>
    {count}
  </div>
}
function IsEven(){
  const isEven=useRecoilValue(evenSelector);
  return<div>
    {isEven?"Even":"Odd"}
  </div>



}
export default App;