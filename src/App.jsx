import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import Aboutme from "./pages/Aboutme";
import ContactMe from "./pages/ContactMe";

const HomePage = () => {
  const colors = {
    bg: '#fdf2f8',
    text: '#5c4b6b',
    primary: '#f9a8d4',
    accent: '#a7f3d0',
    secondary: '#e9d5ff'
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isSuccess = query.get('success');

  const buttonStyle = (color, shadow) => ({
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    display: 'inline-block',
    margin: '10px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Varela Round', sans-serif",
    backgroundColor: color,
    color: color === '#f9a8d4' ? 'white' : '#5c4b6b',
    boxShadow: `0 8px 0px ${shadow}`,
  });

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center', 
      padding: '40px 20px', 
      fontFamily: "'Varela Round', sans-serif", 
      color: colors.text, 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      
      {isSuccess && (
        <div style={{ 
          position: 'absolute', 
          top: '100px', 
          backgroundColor: '#a7f3d0', 
          color: '#065f46', 
          padding: '12px 25px', 
          borderRadius: '50px',
          fontWeight: 'bold', 
          border: '2px solid #6ee7b7', 
          zIndex: 20,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          animation: 'bounce 1s infinite'
        }}>
          Message sent successfully!
        </div>
      )}
      
      <nav style={{ position: 'absolute', top: '30px', display: 'flex', gap: '25px', zIndex: 10 }}>
        <Link to="/Projects" style={{ color: colors.primary, textDecoration: 'none', fontWeight: 'bold' }}>Projects</Link>
        <Link to="/Aboutme" style={{ color: colors.primary, textDecoration: 'none', fontWeight: 'bold' }}>About Me</Link>
        <Link to="/ContactMe" style={{ color: colors.primary, textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
      </nav>

      <div style={{ zIndex: 1, marginTop: '50px' }}>
        <h3 style={{ color: colors.primary, fontSize: '1.5rem' }}>Welcome!</h3>
        <h1 style={{ fontSize: '4.5rem', margin: '0', fontWeight: 'bold' }}>
          Andrea <span style={{ color: colors.primary }}>Michelle</span>
        </h1>
        
        <p style={{ 
          maxWidth: '550px', 
          margin: '30px auto', 
          background: 'rgba(255, 255, 255, 0.5)', 
          padding: '20px', 
          borderRadius: '20px', 
          border: `2px dashed ${colors.secondary}` 
        }}>
          I am a software engineer passionate about building modern and scalable solutions. Here, you'll find some of my most notable projects that combine design, functionality, and performance. If you're interested in learning more, feel free to check out my About Me section. Thank you for visiting!
        </p>

        <div style={{ marginTop: '20px' }}>
          <Link to="/Projects" style={buttonStyle(colors.primary, '#f472b6')}>My projects</Link>
          <Link to="/Aboutme" style={buttonStyle(colors.accent, '#6ee7b7')}>About me</Link>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}
