import React, {useState} from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {

  let allCourses = [];
  const [likedCourses, setLikedCourses] = useState([])
  //returns all courses object value in a single array
  const getCourses = () => {
    if(category === 'All'){
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      })
    })
    return allCourses;
  }
  else{
    return courses[category]; 
  }
}

  return (
    <div className='flex w-[1000px] flex-wrap justify-center gap-2'>
      { 
        getCourses().map( (course)=>{
          return <Card key={course.id} course={course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}></Card>
        })
      }
  
    </div>
  )
}

export default Cards
