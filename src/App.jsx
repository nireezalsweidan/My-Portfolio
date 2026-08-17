import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
