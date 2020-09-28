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


        <nav class="navbar text-center navbar-expand-lg navbar-light bg-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link mt-2" to="/">Forside</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link mt-2" to="/">Produkter</Link>
                </li>
                
                <a class="navbar-brand mx-3 " to="/"><h1>bageriet</h1></a>

                <li class="nav-item">
                    <Link class="nav-link mt-2" to="/">Kontakt</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link mt-2" to="/">Login</Link>
                </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

            
    )
}

export default Navbar
