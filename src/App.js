import React from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">

      <header>
        <Header />
      </header>
      <section>
        <h3>Section</h3>
        <h3>Main</h3>
      </section>

      <footer>
        <Footer />
      </footer>
      

    </div>
  );
}

export default App;
