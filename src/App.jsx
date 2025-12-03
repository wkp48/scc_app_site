import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import VersionInfo from './components/VersionInfo';
import PatchNotes from './components/PatchNotes';
import Footer from './components/Footer';

function App() {
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

