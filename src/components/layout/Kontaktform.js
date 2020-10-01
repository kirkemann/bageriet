import React from 'react'

//Helper APIkald
import { sendKontaktbesked } from '../helpers/apikald'


const Kontaktform = () => {

    const handleBesked = (e) => {
        e.preventDefault(); //forhindre submit i at genindlæse siden/component
        
        sendKontaktbesked(e.target).then(response => {

            if (response !== "error") {

                alert("Din besked er sendt - mange tak :-)")
                
            }

        })
        
    }



    return (

        <div>

            <form onSubmit={handleBesked}>

                <label>
                    <input type="text" name="navn" placeholder="Navn" required />
                </label>
                <br/>
                <label>
                    <input type="email" name="email" placeholder="Email" required />
                </label>
                <br/>
                <label>
                    <input type="text" name="emne" placeholder="Emne" required />
                </label>
                <br/>
                <label>
                    <textarea rows="4" name="besked" placeholder="Besked her" required />
                </label>
                <br/>

                <button type="submit">Send Besked</button>

            </form>
            
        </div>
    )
}

export default Kontaktform
