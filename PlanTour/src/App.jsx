import React,{useState} from "react";
import Tour from './components/Tour'
import data from'./data.jsx'
function App() {

  const [tours, setTours] = useState(data)
  
  function removeTour(id){
    const newTour = tours.filter((tour)=> tour.id !== id)
    setTours(newTour) 
  }

  if(tours.length === 0){
    return (
      <div className="flex flex-col justify-center items-center min-h-[100vh]">
        <h2 className="font-bold text-3xl">No Tours Left</h2>
        <button className="py-2 px-3 my-3 bg-slate-500 rounded-full" onClick={()=>setTours(data)}>
          Refersh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tour tours = {tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
