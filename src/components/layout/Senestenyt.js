import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


// helper - apikald
import { hentAntalProdukter } from '../helpers/apikald'

const Senestenyt = () => {

    //State
    const [senestenyt, setSenestenyt] = useState();


    //useEffect
    useEffect(() => {

        hentAntalProdukter().then(Response => setSenestenyt(Response))
    }, [])
    


    // Senestenyt indlæses på siden--------------------------------------
    // Når component loader og der endnu ikke er senestenyt i senestenyt-state
    let nytliste = <h2>Loading ....</h2>
    //Når der er noget i senestenyt-state
    if (senestenyt && senestenyt.length) {

        nytliste = senestenyt.map(e => (

        <div className="col-4" key={e._id}>
            <img src={"http://localhost:5033/Images/" + e.image} alt="Foto"/>
            <h2>{e.titel}</h2>
            <p>{e.teaser}</p>
        </div>
        ) )

    }

    return (
        <div>
            <h2 className="logo my-5">Vi skaber lækkert!brød</h2>
            <p className="mb-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        
            {nytliste}

            </div>

        
    )
}

export default Senestenyt
