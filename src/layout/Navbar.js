import React from 'react'
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


        <nav className="navbar text-center navbar-expand-lg navbar-light bg-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link mt-2" to="/">Forside</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mt-2" to="/">Produkter</Link>
                </li>

                <a className="navbar-brand mx-3 logo" to="/"><h1>bageriet</h1></a>

                <li className="nav-item">
                    <Link className="nav-link mt-2" to="/">Kontakt</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mt-2" to="/">Login</Link>
                </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

            
    )
}

export default Navbar
