import React, {useEffect, useState} from 'react'
import Image from 'react-bootstrap/Image'


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


                <div className="col-12 col-md-4 col-lg-4" key={e._id}>
                        <Image src={"http://localhost:5033/Images/" + e.image} alt="Foto" roundedCircle />
                        <h2>{e.titel}</h2>
                        <p>{e.teaser}</p>
                </div>

        ) )

    }

    return (
        <div>
            <h2 className="logo my-5">Vi skaber lækkert!brød</h2>
            <p className="mb-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        

            <div className="container"> 
                <div className="row my-5"> 
                    {nytliste}
                </div> 
            </div> 

            </div>

        
    )
}

export default Senestenyt
