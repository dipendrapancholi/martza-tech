import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ServicesProvided from './Components/Services-Provide';
import HelpSection from './Components/HelpSection';
import HeroBanner from './Components/HeroSection';
import ProjectForm from './Components/ProjectForm';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroBanner />
      <ServicesProvided />
      <HelpSection />
      <ProjectForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
