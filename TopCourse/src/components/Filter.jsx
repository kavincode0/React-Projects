import React from 'react'

const Filter = ({filterdata, category, setCategory}) => {

  function filterHandler(title){
    setCategory(title)
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max mx-auto space-x-4 my-4 justify-center'>
        {filterdata.map((d) => {
           return (
            <button className={`text-lg px-2 py-1 rounded-md font-medium 
              text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300`} 
              key={d.id} onClick={() => filterHandler(d.title)}>
                {d.title}
            </button>
           )
        })}
     </div>
  )
}

export default Filter
