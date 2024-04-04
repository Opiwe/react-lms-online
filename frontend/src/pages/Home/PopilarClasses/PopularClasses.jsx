import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import Card from './Card';

const PopularClasses = () => {

    const axiosFetch = useAxiosFetch();
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const fetchClasses = async () => {
            const response = await axiosFetch.get('/classes');
            // console.log(response.data);
            setClasses(response.data);
        }

        fetchClasses();

    },[])

    console.log(classes);

    return (
        <div className='md:w-[80%] mx-auto my-36'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'> Popular</span> Classes</h1>
                <div className='w-[40%] text-center mx-auto my-4'>
                    <p className='text-gray-500'>Explore our Popular Classes. Here is some popular classes based on how many students enrolled</p>
                </div>
            </div>

            <div>
                {
                    classes.map((item, index) => <Card key={index}/>)
                }
            </div>
        </div>
    )
}

export default PopularClasses;