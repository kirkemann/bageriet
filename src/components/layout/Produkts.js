import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import parse from 'html-react-parser';





// helper - apikald
import { hentProduktID } from '../helpers/apikald'


const Produkts = (props) => {



    const [produktid, setProduktid] = useState()

    useEffect(() => {

        hentProduktID(props.match.params.produktID).then(setProduktid);


    }, [props.match.params.produktID])

    let produktinfo = "Indlæses ....."
    let likesinfo = "Indlæses ....."
    let overskrift = "Indlæses ....."

    if(produktid) {

        overskrift = (
            <div>
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
            <div>
                <p>{produktid.likes}</p>
            </div>
        )
    }




    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-6 text-left">
                        {overskrift}
                    </div>
                    <div className="col-6 text-right"><Button variant="outline-danger btn btn-lg">Likes {likesinfo} </Button>{' '}</div>
                </div>
                <div className="row">
                    <div className="col-9">

                        {produktinfo}

                    </div>
                    <div className="col-3"></div>

                </div>
            </div>
        </div>
    )
}

export default Produkts
