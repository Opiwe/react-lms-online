import React from 'react'
import HeroContainer from './Hero/HeroContainer';
import Gallery from './Gallery/Gallery';
import PopularClasses from './PopilarClasses/PopularClasses';

const Home = () => {
    return (
        <section>
            <HeroContainer />
            <div className='max-w-screen-xl mx-auto'>
                <Gallery />
            </div>
            <div>
                <PopularClasses/>
            </div>
        </section>
    )
}

export default Home