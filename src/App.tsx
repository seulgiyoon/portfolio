import React from 'react';
import {
  Header,
  Introduction,
  WorkExperiences,
  PersonalProjects,
  Footer,
} from './sections';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Introduction />
        <WorkExperiences />
        <PersonalProjects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
