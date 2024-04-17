import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularClasses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/courses')
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='md:w-[80%] mx-auto my-36'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'>Popular</span> Classes</h1>
                <div className='w-[40%] text-center mx-auto my-4'>
                    <p className='text-gray-500'>Explore our Popular Classes. Here are some popular classes based on how many students enrolled.</p>
                </div>
            </div>

            <div>
                {/* Fix map function to return JSX */}
                {courses.map((course, index) => (
                    <div key={index}>
                        <div className='w-[40%] mx-auto my-4'>
                            <h1 className="text-2xl font-bold">{course.name}</h1>
                            <p>{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
