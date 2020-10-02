import React from 'react'
import '../../App';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

    let history = useHistory();

    const handleSoeg = (e) => {


        e.preventDefault();
        console.log(e.target.soeg.value);
        
        // Send til SøgeResultatsiden
        history.push("/soegning/" + e.target.soeg.value)
    }



    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-gradient-primary">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-5 justify-content-center" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link className="nav-link text-light" to="/">Forside</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/produkter">Produkter</Link>
                    </li>

                    <Link className="navbar-brand mx-3 logo text-light" to="/"><h1>bageriet</h1></Link>

                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/kontakt">Kontakt</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSoeg}>
                <input name="soeg" type="search" />
                <button className="soegknap" type="submit"><FontAwesomeIcon icon="search" /></button>
            </form>
        </nav>

            
    )
}

export default Navbar
