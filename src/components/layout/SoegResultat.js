import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

// helper - apikald
import { soegProdukt } from '../helpers/apikald'


const Soegeresultat = (props) => {

    console.log(props.match.params.soegeordet);


    //state til events som matcher søgningen
    const [soege, setSoege] = useState()

    // kald api´et
    useEffect(() => {

        soegProdukt(props.match.params.soegeordet).then(response => setSoege(response))

    }, [props.match.params.soegeordet])



    //Gør events klar til at blive vist på siden
    let soegeliste = <h2>Loading ....</h2>
    let antal = "";

    //Når der er noget i event-state
    if (soege && soege.length) {

        antal = "Antal match " + soege.length;
        
        soegeliste = soege.map(e => (

            <div className="soeg my-4" key={e._id}>
                <img src={"http://localhost:5033/images/" + e.image} alt="Foto"/>
                <h2>{e.titel}</h2>
                <p>{e.teaser.substr(0,50) + "......"}</p>
                <Link to={"/produkt/" + e._id}>Læs mere om dette event</Link>
            </div>
        ) )


    }


    return (
        <div>
            <h1>Søgeresultat</h1>
            {antal}
            {soegeliste}
            
        </div>
    )
}

export default Soegeresultat
