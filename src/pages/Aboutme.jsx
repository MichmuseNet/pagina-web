import { Link } from "react-router";

const AboutMe = () => {
  const colors = {
    bg: '#fdf2f8',    
    cardBg: '#ffffff',   
    text: '#5c4b6b',   
    primary: '#f9a8d4',   
    secondary: '#e9d5ff',
    accent: '#a7f3d0'   
  };

  const badgeStyle = {
    background: colors.accent + '44',
    color: colors.text,
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: `2px solid ${colors.accent}`,
    display: 'inline-block',
    margin: '5px'
  };

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      padding: '40px 20px',
      fontFamily: "'Varela Round', sans-serif",
      color: colors.text,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Link to="/" style={{ color: colors.primary, textDecoration: 'none', fontWeight: 'bold' }}>
          ← Go back
        </Link>

        <div style={{ 
          background: colors.cardBg, 
          marginTop: '30px', 
          borderRadius: '40px', 
          padding: '50px',
          border: `5px solid ${colors.secondary}`,
          boxShadow: '0 15px 0px #e9d5ff', 
          textAlign: 'center',
          position: 'relative'
        }}>
          <span style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '2rem' }}></span>
          <span style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '2rem' }}></span>

          <div style={{ 
            width: '150px', 
            height: '150px', 
            backgroundColor: colors.primary, 
            borderRadius: '50%', 
            margin: '0 auto 20px',
            border: `5px solid white`,
            boxShadow: `0 0 0 5px ${colors.primary}`,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '4rem' }}>👩‍💻</span>
          </div>

          <h1 style={{ fontSize: '3rem', color: colors.primary, marginBottom: '10px' }}>
            Hi! I'm Andrea Michelle
          </h1>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
            I am a software engineer with a passion for creating innovative and user-centric solutions. 
            With a background in both front-end and back-end development,
             I specialize in building responsive and efficient software. 
             My approach is driven by a blend of creativity, technical expertise, and a strong focus on delivering seamless user experiences.
              I’m always eager to learn new technologies and collaborate on challenging projects that push the boundaries of what’s possible. 
              Outside of coding, I enjoy staying active, learning new things, and exploring different aspects of design and technology.
            
          </p>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: colors.primary }}>Tools</h3>
            <div style={badgeStyle}>C + +</div>
            <div style={badgeStyle}>Python</div>
            <div style={badgeStyle}>CSS</div>
            <div style={badgeStyle}>JavaScript</div>
          </div>

          <div style={{ 
            background: colors.bg, 
            borderRadius: '20px', 
            padding: '20px',
            border: `2px dashed ${colors.primary}`
          }}>
            <h3 style={{ marginTop: 0 }}>Fun Facts About Me </h3>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', display: 'inline-block' }}>
              <li>I love cats</li>
              <li>My favorite color is pink</li>
              <li>I am always looking for the next challenge</li>
              <li>I enjoy playing video games</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
