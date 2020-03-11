import React from 'react';
import './App.scss';
import { Header, Introduction, Projects, Footer } from './sections';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
