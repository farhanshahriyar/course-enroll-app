
import './app.css'
import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import toast, { Toaster } from 'react-hot-toast';

export function App() {
  const [courseDetails, setCourseDetails] = useState([]);


  const showCourseDetails = (course) => {
    const item = courseDetails.find((item) => item.id === course.id);
    if (item) {
      toast.error ('Course already added');
      return;
    }
    const total = [...courseDetails, course].reduce((total, course) => total + course.credit, 0);
    if (total > 20) {
      toast.error ('Credit hours exceeded');
      return;
    }
    setCourseDetails([...courseDetails, course]);
  };

  return (
    <>
    <Toaster/>
    <h1 className="text-fnt-clr-1 text-center text-3xl font-bold mt-2 webText">
        Course Registration
      </h1>
      <div className='py-16 px-2 lg:px-0'>
        <div className='container mx-auto px-2'>
          <div class="flex gap-4 flex-col md:flex-row lg:flex-row">
            <div class="product-area lg:w-3/4 p-0">
              <Courses showCourseDetails={showCourseDetails} />
            </div>
            <div class="w-full md:w-1/4 lg:w-1/4 mt-[3.8rem] hidden lg:block">
               <Cart courseDetails={courseDetails}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


