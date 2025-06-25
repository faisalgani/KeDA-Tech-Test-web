import React, { useEffect } from 'react';
import NavBar from './components/navBar';
import About from './pages/about';
import Pricing from './pages/pricing';
import ContactPage from './pages/contact';

function App() {
  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay opsional agar transisi terasa lebih halus
    }
  };

  // Scroll otomatis ke section "about" saat pertama buka
  useEffect(() => {
    const section = document.getElementById('about');
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);

  return (
    <>
      <NavBar onNavigate={handleNavigate} />
      <main>
        <About />
        <Pricing />
        <ContactPage />
      </main>
    </>
  );
}

export default App;
