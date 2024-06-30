import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true)
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data)
      }
    catch(error){
      toast.error("something went wrong")
    }
    setLoading(false)
  }

useEffect( () => {
    fetchData();
}, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div>        
      <Navbar/>
      </div>
      <div>
      <Filter filterdata = {filterData} category={category} setCategory = {setCategory}>
      </Filter>
      </div>
      <div className='w-11/12 flex m-w-[1200px] flex-wrap mx-auto space-x-4 my-4 justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
        }
      </div>
    </div>
  );
}

export default App;
