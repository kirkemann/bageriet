import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Produkter from './components/layout/Produkter';
import Kontakt from './components/layout/Kontakt';
import Login from './components/layout/Login';
import SoegResultat from './components/layout/SoegResultat';
import Produkts from './components/layout/Produkts';


function App() {
  return (
    <div className="App">

      <header>
        <Header />
      </header>

      <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/produkter" component={Produkter} />
            <Route exact path="/produkt/:produktID" component={Produkts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/kontakt" component={Kontakt} />
            <Route exact path="/soegning/:soegeordet?" component={SoegResultat} />



          </main>



      <footer>
        <Footer />
      </footer>
      

    </div>
  );
}

export default App;
