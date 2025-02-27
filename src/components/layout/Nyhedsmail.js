import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// helper - apikald
import { tilmeldNyheder } from '../helpers/apikald'

const Nyhedsmail = () => {

//State til at håndtere hvis det går godt med tilmeld

const [besked, setBesked] = useState()

    const handleSend = async (e) => {
    
        e.preventDefault();
    
        //e.target er formularen med dens indhold af input mv.
        tilmeldNyheder(e.target).then(response => {

            if (response !== "error") {
                console.log(response);
                setBesked("Tak for din tilmelding")  
            }
        })
    
    }

    return (

        
        <div className="bg-img">
            <section className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <h2 className="logo text-light text-left tekst">Tilmeld dig vores nyhedsbrev</h2>
                        <p className="text-light text-left tekst">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver</p>
                            <div className="content">
                            {
            
                                besked ? <p> {besked} </p>
                                :
                                <form className="input-group" onSubmit={handleSend}>
                                
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><FontAwesomeIcon icon="envelope" /></div>
                                    </div>
                                    <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                                    <span className="input-group-btn">
                                    <button className="btn" type="submit">Tilmeld</button>
                                    </span>
                                </form>
                        
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

               
        </div>
    )
}

export default Nyhedsmail
