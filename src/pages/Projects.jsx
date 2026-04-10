import { useEffect, useState } from 'react';
import { Link } from "react-router"; 

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = {
    bg: '#fdf2f8',  
    cardBg: '#ffffff', 
    text: '#5c4b6b',     
    primary: '#f9a8d4',  
    accent: '#a7f3d0',   
    border: '#e9d5ff',   
    hoverBorder: '#fbcfe8'
  };

  useEffect(() => {
    fetch('https://api.github.com/users/MichmuseNet/repos?sort=updated')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading Github repos", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      color: colors.text, 
      padding: '60px 20px',
      fontFamily: "'Varela Round', sans-serif"
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Link to="/" style={{ color: colors.primary, textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
          ← Go back
        </Link>

        <h1 style={{ 
          fontSize: '4rem', 
          marginTop: '25px', 
          marginBottom: '10px', 
          color: colors.text,
          fontWeight: 'bold',
          letterSpacing: '-1px'
        }}>
          My <span style={{ 
            color: colors.primary, 
            textShadow: `0 0 10px ${colors.primary}44` 
          }}>Projects</span> 
        </h1>
        <p style={{ color: colors.text + 'aa', marginBottom: '50px', fontSize: '1.1rem' }}>
          Each project showcases my skills in building impactful and efficient software solutions. From web development to innovative tools, these works reflect my approach to problem-solving and design.
        </p>

        {loading ? (
          <h2 style={{ color: colors.primary }}>Loading projects...</h2>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {repos.map((repo) => (
              <div key={repo.id} style={{ 
                background: colors.cardBg, 
                padding: '30px', 
                borderRadius: '25px', 
                border: `3px solid ${colors.border}`, 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: '0.4s ease',
                boxShadow: '0 5px 15px rgba(233, 213, 255, 0.2)' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = colors.hoverBorder;
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(249, 168, 212, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(233, 213, 255, 0.2)';
              }}
              >
                <div>
                  <h3 style={{ 
                    color: colors.text, 
                    marginBottom: '12px', 
                    fontSize: '1.6rem',
                    fontWeight: 'bold'
                  }}>
                    {repo.name}
                  </h3>
                  <p style={{ fontSize: '1rem', color: colors.text + 'bb', lineHeight: '1.6' }}>
                    {repo.description || "  "}
                  </p>
                </div>

                <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    background: colors.accent + '33', 
                    color: colors.text, 
                    padding: '6px 15px', 
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    border: `2px solid ${colors.accent}`
                  }}>
                    {repo.language || 'Multi'} 
                  </span>
                  
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: colors.primary, 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      borderBottom: `2px solid ${colors.primary}`,
                      transition: '0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = colors.text}
                    onMouseOut={(e) => e.currentTarget.style.color = colors.primary}
                  >
                    VIEW CODE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
