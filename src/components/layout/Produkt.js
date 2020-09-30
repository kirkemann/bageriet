import React, {useEffect, useState} from 'react'
import Image from 'react-bootstrap/Image'


// helper - apikald
import { hentProdukter } from '../helpers/apikald'

const Senestenyt = () => {

    //State
    const [hentProdukt, setHentProdukt] = useState();


    //useEffect
    useEffect(() => {

        hentProdukter().then(Response => setHentProdukt(Response))
    }, [])
    


    // produkt indlæses på siden--------------------------------------
    // Når component loader og der endnu ikke er produkt i produkt-state
    let produktliste = <h2>Loading af produkter ....</h2>
    //Når der er noget i produkt-state
    if (hentProdukt && hentProdukt.length) {

        produktliste = hentProdukt.map(e => (


                <div className="col-12 col-md-4 col-lg-3" key={e._id}>
                        <Image src={"http://localhost:5033/Images/" + e.image} alt="Foto" thumbnail />
                        <h2>{e.titel}</h2>
                        <p>{e.teaser}</p>
                </div>

        ) )

    }

    return (
        <div>
      
            <div className="container"> 
                <div className="row my-5"> 
                    {produktliste}
                </div> 
            </div> 

            </div>

        
    )
}

export default Senestenyt
