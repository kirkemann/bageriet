import React, { useState } from 'react'

// helper - apikald
import { tilmeldNyheder } from '../helpers/apikald'

const Nyhedsmail = () => {


    const [tilmeldt, setTilmeldt] = useState(false)


    const handleSubmit = async (e) => {
    
        e.preventDefault();
    
        let tilmelding = {
            email: e.target.email.value
        }
    
        tilmeldNyheder(tilmelding).then(response => {
             console.log(response)
            setTilmeldt(true);
            
            })
    
    }

    return (

        
        <div className="bg-img">
            <main className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="content">
                            {
            
                                 !tilmeldt ? 

                                <div className="input-group" onSubmit={handleSubmit}>
                                    <input type="email" className="form-control" placeholder="Enter your email" required />
                                    <span className="input-group-btn">
                                        <button className="btn" type="submit">Tilmeld</button>
                                    </span>
                                </div>
                                         : 
                                         <h4>Tak for din tilmelding</h4>
                                       
                                 }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
               
        </div>
    )
}

export default Nyhedsmail
