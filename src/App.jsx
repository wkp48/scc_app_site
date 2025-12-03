import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VersionInfo from './components/VersionInfo';
import PatchNotes from './components/PatchNotes';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Copyright from './components/Copyright';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'terms') {
        setCurrentPage('terms');
      } else if (hash === 'cookies') {
        setCurrentPage('cookies');
      } else if (hash === 'copyright') {
        setCurrentPage('copyright');
      } else {
        setCurrentPage('home');
      }
    };

    // 초기 로드 시 해시 확인
    handleHashChange();

    // 해시 변경 이벤트 리스너
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPage === 'privacy') {
    return (
      <div className="App">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="App">
        <Header />
        <TermsOfService />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'cookies') {
    return (
      <div className="App">
        <Header />
        <CookiePolicy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'copyright') {
    return (
      <div className="App">
        <Header />
        <Copyright />
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <VersionInfo />
        <PatchNotes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

