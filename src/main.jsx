import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/journey.css';
import './styles/technologies.css';
import './styles/skills.css';
import './styles/experience.css';
import './styles/projects.css';
import './styles/hireme.css';
import './styles/contact.css';
import './styles/footer.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
