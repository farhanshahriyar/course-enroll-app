import React from 'react'

const Enroll = ({ course, showCourseDetails }) => {
    // enroll (btn) functionality will go here
    const { name, description, price, credit, photo } = course;

    return (
        <div>
            <div className='p-3 lg:p-5'>
                <div>
                    <img src={photo} className='w-full' alt='' />
                </div>
                <h2 className='text-fnt-clr-1 text-lg font-semibold mt-2 webText'>{name}</h2>
                <p className='text-fnt-clr-2 text-sm mt-2 webText'>{description}</p>
                <div className='mt-2 lg:mt-4 flex item-center justify-between'>
                    <span className='text-fnt-clr-2 text-lg font-medium'>
                        $ Price: {price}
                    </span>
                    <div className='flex items-center gap-[6px]'>
                        <span className='text-fnt-clr-2 text-lg font-medium'>
                            Credit: {credit} hr
                        </span>
                    </div>
                </div>
    
                <button
                className='w-full bg-btn-primary-clr text-white text-lg font-semibold webText mt-2 lg:mt-4 py-5 px-4 rounded-[8px] hover:bg-fnt-clr-2 hover:text-fnt-clr-1 transition duration-300 ease-in-out'
                onClick={() => showCourseDetails(course)}
                >
                Select
                </button>

            </div>
        </div>
    )
}

export default Enroll
