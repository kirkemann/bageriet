import React from 'react'
import Googlemap from '../Images/thumbnail.jpg'
import Kontaktform from './Kontaktform'



const Kontakt = () => {


    return (
        <div className="container">
                <h2 className="logo my-5">Kontakt os</h2>
                <p className="my-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>


            <div className="row">
                <div className="col-6 ">
                    <Kontaktform />

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
