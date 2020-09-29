import React from 'react'
import '../../App';
import { Link, useHistory } from 'react-router-dom';

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
                        <Link className="nav-link mt-2 text-light" to="/">Forside</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mt-2 text-light" to="/">Produkter</Link>
                    </li>

                    <a className="navbar-brand mx-3 logo text-light" to="/"><h1>bageriet</h1></a>

                    <li className="nav-item">
                        <Link className="nav-link mt-2 text-light" to="/">Kontakt</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mt-2 text-light" to="/">Login</Link>
                    </li>
                </ul>
            </div>
            <form className="form-inline ml-5 justify-content-end">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Søg</button>
            </form>
        </nav>

            
    )
}

export default Navbar
