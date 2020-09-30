import React from 'react'
import Googlemap from '../Images/thumbnail.jpg'

// helper - apikald
import { opretKontakt } from '../helpers/apikald'



const Kontakt = () => {

    
const handleSubmit = async (e) => {

    e.preventDefault(); // så component ikke loader ved submit


    opretKontakt(e.target).then(response => {
        
        console.log(response)

    })

    e.target.reset() //Tømmer form 

}

    return (
        <div className="container">
                <h2 className="logo my-5">Kontakt os</h2>
                <p className="my-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>


            <div className="row">
                <div className="col-6 ">
                    <form onSubmit={handleSubmit}>

                        <input name="navn" placeholder="Dit navn" required /><br/><br/>

                        <input name="emailadresse" placeholder="Email" required  /><br/><br/>

                        <input name="emne" placeholder="Emne" required  /><br/><br/>

                        <textarea name="besked" placeholder="Din besked" ></textarea><br/><br/>

                        <button type="submit">Tilmeld</button>

                    </form>

                </div>
                <div className="col-12 col-lg-6 mb-5 text-left">

                            <p className="text-left">addresse: Øster uttrup 1 9200 aalborg</p>
                            <p className="text-left">telefon: +45 25 26 95 40</p>


                        <img src={Googlemap} alt="google maps" />

                </div>
            </div>
        </div>
    )
}

export default Kontakt
