import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (

    <div className="App">
      <NavBar />
      <Banner />
      {<Skills />}
      {<Projects />}
      <Footer />
    </div>

  );
};

export default App;
