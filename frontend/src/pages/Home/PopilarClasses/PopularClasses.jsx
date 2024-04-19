import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const PopularClasses = () => {

    const {id} = useParams();
    const [course, setCourse] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/courses/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setCourse(data)
        })
    }, [])

    console.log(course);

    return (
        <div className='md:w-[80%] mx-auto my-36'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'> Popular</span> Classes</h1>
                <div className='w-[40%] text-center mx-auto my-4'>
                    <p className='text-gray-500'>Explore our Popular Classes. Here is some popular classes based on how many students enrolled</p>
                </div>
            </div>

            {/* <div>
                {
                    classes.map((item, index) => <Card key={index}/>)
                }
            </div> */}
        </div>
    )
}

export default PopularClasses;