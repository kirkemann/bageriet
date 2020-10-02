import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





// helper - apikald
import { hentProduktID } from '../helpers/apikald'


const Produkts = (props) => {



    const [produktid, setProduktid] = useState()

    useEffect(() => {

        hentProduktID(props.match.params.produktID).then(setProduktid);

        // hentProduktID().then(setKommentar);



    }, [props.match.params.produktID])

    let produktinfo, overskrift, likesinfo  = "Indlæses ....."

    let kommentarliste
    let iliste

    if(produktid) {

        overskrift = (
            <div className="col-12 col-lg-9 text-left">
                <h2>{produktid.titel}</h2>
                <h4 className="text-secondary">{produktid.kategori.titel} </h4>
            </div>
        )
        produktinfo = (
            
            <div>
                <img className="tilpas mr-2" src={"http://localhost:5033/Images/" + produktid.image} alt={"Foto fra " + produktid.titel} title={"Foto fra " + produktid.titel}/>
                <p className="text-left">{parse(produktid.beskrivelse)}</p>
            </div>
        )

        likesinfo = (
            <div type="button" className="btn btn-outline-danger">
                <p>Likes {produktid.likes} <FontAwesomeIcon icon="heart" /></p>
            </div>
        )

        kommentarliste = produktid.kommentar.map(k => (


            <div className="col-12 text-left mb-3" key={k._id}>
                <div className="card">
                    <div className="card-body">
                        <h5>{k.bruger.fornavn} {k.bruger.efternavn}</h5>
                        <p>{k.oprettet}</p>
                        <p>{k.kommentaren}</p>
                    </div>
                </div>

            </div>

    ) )
        iliste = produktid.ingredienser.map(i => (

  


            <div className="col-12" key={i._id}>
                <div className="card my-1">
                    <div className="card-body">
                        <div className="card-title"><h5>{i.maengde} {i.enhed_forkortet} {i.ingrediens_titel} </h5></div>
                    </div>
                </div>
                    
            </div>

    ) )
    }


    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-9">
                        {overskrift}
                    </div>
                    <div className="col-3">{likesinfo} </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-12">

                        {produktinfo}

                    </div>
                    <div className="col-12 col-lg-3">
                        {iliste}
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 mt-5">
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Skriv kommentar her"
                            aria-label="Skriv kommentar her"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary">Indsæt</Button>
                            </InputGroup.Append>
                        </InputGroup>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5">
                        {kommentarliste}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produkts
