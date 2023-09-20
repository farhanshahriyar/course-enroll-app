import React from 'react';

const Cart = ({ courseDetails }) => {
  const totalCreditHours = courseDetails.reduce((total, course) => total + course.credit, 0);
  const totalPrice = courseDetails.reduce((total, course) => total + course.price, 0);
  // console.log(courseDetails)
  return (
    <div>
      <div className="bg-white rounded p-8">
        <h2 className="font-bold text-xl text-[#2F80ED]">Credit Hour Remaining {20 - totalCreditHours} hr</h2>
      </div>
      <div className="bg-white rounded p-8 mt-6">
        <div className="border-b mb-4 py-2">
          <h3 className="font-bold text-lg text-fnt-clr-2">Course Name</h3>
            {
              courseDetails.length > 0 ? 
               <ol className='list-decimal pl-2'>
                  {
                    courseDetails.map((course) => (
                      <li key={course.id} className="flex justify-between py-2">
                        <span>{course.name}</span>
                      </li>
                    ))
                  }
                  </ol>
                    : <p>No courses selected yet.</p>
            }
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <span className="font-semibold text-fnt-clr-1">Total Credit Hours</span>
          <span className="font-semibold text-fnt-clr-1">{totalCreditHours} hr</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-semibold text-fnt-clr-1">Total Price</span>
          <span className="font-semibold text-fnt-clr-1">{totalPrice} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;

