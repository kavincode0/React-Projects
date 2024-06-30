import React, {useState} from "react";
import "./App.css";

function App() {

  const [cnt, setCnt] = useState(0);
  function decHandler(){
    setCnt(cnt-1);
  }
  function incHandler(){
    setCnt(cnt+1);
  }
  function resetHandler(){
    setCnt(0)
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
       </button>

      <div className="font-bold gap-12 text-5xl">
          {cnt}
      </div>
  
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white py-2 px-5 rounded-sm text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
