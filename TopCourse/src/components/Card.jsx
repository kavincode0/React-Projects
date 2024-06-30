import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses}) => {
    let likedCourse = likedCourses;
    let setLikedCourse = setLikedCourses;
    function clickHandler(){
         if(likedCourse.includes(course.id)){
            //pehle se liked
            setLikedCourse((prev) => prev.filter( (cid)=>(cid !== course.id) ));
            toast.warning("like removed")
         }
         else{
            //pehle se not liked
            if(likedCourse.length === 0){
                setLikedCourse([course.id]);
            }
            else{
                setLikedCourse((prev) => [...prev, course.id])
            }
            toast.success("liked")
         }
    }
  return (
    <div className='w-[300px] bg-[#0000ff] rounded-lg text-white overflow-hidden'>

        <div className='relative'>
            <img src={course.image.url} alt="" />
            <div className='absolute w-[40px] h-[40px] rounded-full right-2 bottom-0.5 bg-white grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourse.includes(course.id)? (<FcLike fontSize="1.75rem"/>): (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
        </div>
        <div className='p-3'>
            <p className='font-bold text-lg leading-6'>{course.title}</p>
            <p className='mt-2'>
                {
                    course.description.length > 100 ? 
                    (course.description.substr(0, 100) + '...'):
                    (course.description)
                }
            </p>
        </div>
      
    </div>
  )
}

export default Card
