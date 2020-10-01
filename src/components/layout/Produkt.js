import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


// helper - apikald
import { hentProdukter } from '../helpers/apikald'

const Produkter = () => {

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

            <Card key={e._id} className="col-12 col-md-4 col-lg-3 my-3">
            <Card.Img variant="top" src={"http://localhost:5033/Images/" + e.image} alt="Foto" />
            <Card.Body>
                
                <Card.Title>{e.titel}</Card.Title>
                <Card.Text>
                {e.teaser.substr(0,50) + "......"}
                </Card.Text>
                <Link to={"/produkt/" + e._id}>Læs mere</Link>
            </Card.Body>
            </Card>


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

export default Produkter
