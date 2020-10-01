import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom';



    // helper - apikald
    import { alleProdukter, hentAlleKategori } from '../helpers/apikald'


const Produkter = () => {


    //STATE
    const [kategori, setKategori] = useState();
    const [AllehentProdukter, setAlleHentProdukter] = useState();
    const [valgtkategori, setValgtkategori] = useState("5f63b9f9702cca37f87ce06f");

    //useEffect
    useEffect(() => {

        hentAlleKategori().then(setKategori)

        alleProdukter().then(setAlleHentProdukter)

    }, [])
    

    //Kategorier indlæses på siden

    let kategoriliste = <option>Vent venlist.... indlæser...</option>

    if ( kategori && kategori.length) {
        kategoriliste = kategori.map(r => (
            <button onClick={e => setValgtkategori(e.target.value)} className="my-2 card-link col-12 p-2" key={r._id} value={r._id}>{r.titel}</button>
        ))

    }

         
        // produkt indlæses på siden--------------------------------------
        // Når component loader og der endnu ikke er produkt i produkt-state
        let alleproduktliste = <h2>Loading af produkter ....</h2>
        //Når der er noget i produkt-state
        if (AllehentProdukter && AllehentProdukter.length) {
    
            alleproduktliste = AllehentProdukter.filter(e => {

                return e.kategori._id === valgtkategori
    
            })
            
            
            .map(e => (
    
                <Card key={e._id} className="col-12 col-md-4 col-lg-4 my-3">
                <Card.Img variant="top" src={"http://localhost:5033/Images/" + e.image} alt="Foto" />
                <Card.Body>
                    
                    <Card.Title>{e.titel}</Card.Title>
                    <Card.Text>
                    {e.teaser.substr(0,100) + "......"}
                    </Card.Text>
                    <Link to={"/produkt/" + e._id}>Læs mere</Link>
                </Card.Body>
                </Card>
    
    
            ) )
    
        }


    
    return (
        <div className="container">

                <h2 className="logo my-5">Vi elsker bagværk</h2>
                <p className="my-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>

            <div className="row">

                <div className="col-12 col-lg-4">
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item >{kategoriliste}</ListGroup.Item>
                    </ListGroup>
                </Card>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="row">
                        {alleproduktliste}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produkter
