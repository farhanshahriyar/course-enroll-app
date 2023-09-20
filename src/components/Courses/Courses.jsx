import React, {useEffect, useState} from 'react'
import Enroll from '../CourseEnroll/Enroll'

const Courses = ({showCourseDetails}) => {
    // courses (list and others) functionality will go here
    const [courses, setCourses] = useState([]);

    // load courses from the json
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
  return (
    <div>
    
        <p className='text-center'>Total Course: {courses.length}</p>

        {/* Course List */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {
                courses.map((course) => 
                <Enroll key={course.id} course={course} showCourseDetails={showCourseDetails}>
                </Enroll>)
            }
        </div>
        
    </div>
  )
}

export default Courses
