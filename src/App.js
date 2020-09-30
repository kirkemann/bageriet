import React from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nyhedsmail from './components/layout/Nyhedsmail';
import Produkt from './components/layout/Produkt';
import Senestenyt from './components/layout/Senestenyt.js';

function App() {
  return (
    <div className="App">

      <header>
        <Header />
      </header>
      <section>

        <Senestenyt />
        <Nyhedsmail />
        <Produkt />

      </section>

      <footer>
        <Footer />
      </footer>
      

    </div>
  );
}

export default App;
