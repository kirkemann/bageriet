import React from 'react'
import Produkt from './Produkt';
import Senestenyt from './Senestenyt';
import Nyhedsmail from './Nyhedsmail';
import Slider from './Slider'


const Home = () => {
    return (
        <div>
            <Slider />
            <section>
                <Senestenyt />
                <Nyhedsmail />
                <Produkt />

            </section>
        </div>
    )
}

export default Home
