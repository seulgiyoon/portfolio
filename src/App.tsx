import React from 'react';
import {
  Header,
  Introduction,
  Projects,
  Experiences,
  Footer,
} from './sections';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <Projects />
        <Experiences />
      </main>
      <Footer />
    </div>
  );
}

export default App;
