import React, { useState } from 'react';
import NavBar from './components/navBar';
import About from './pages/about';
import Pricing from './pages/pricing';
import ContactPage from './pages/contact';

function App() {
  const [activeSection, setActiveSection] = useState('all'); 
  
  return (
    <>
      <NavBar onNavigate={setActiveSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'pricing' && <Pricing />}
      {activeSection === 'contact' && <ContactPage />}
      {activeSection === 'all' && (
        <>
          <About />
          <Pricing />
          <ContactPage />
        </>
      )}
    </>
  );
}

export default App;
