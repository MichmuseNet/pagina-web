import { useState } from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/server", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message ):", error);
      setStatus("error");
    }
  };

  const colors = {
    bg: '#fdf2f8',
    text: '#5c4b6b',
    primary: '#f9a8d4',
    secondary: '#e9d5ff',
    success: '#a7f3d0',
    error: '#fecaca'
  };

  const inputStyle = {
    padding: '12px 20px',
    borderRadius: '15px',
    border: '2px solid #f3f4f6',
    outline: 'none',
    fontFamily: "'Varela Round', sans-serif",
    backgroundColor: '#f9fafb',
    fontSize: '1rem',
    color: colors.text
  };

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: "'Varela Round', sans-serif",
      padding: '20px'
    }}>
      
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: colors.primary, fontWeight: 'bold' }}>
          ⬅ Volver
        </Link>
      </div>

      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '30px',
        boxShadow: `0 10px 0px ${colors.secondary}`,
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center',
        border: `2px solid ${colors.secondary}`
      }}>
        
        {status === "success" && (
          <div style={{ 
            backgroundColor: colors.success, 
            color: '#065f46', 
            padding: '12px', 
            borderRadius: '15px', 
            marginBottom: '20px',
            fontWeight: 'bold',
            border: '2px solid #6ee7b7'
          }}>
            Message sent succesfully!
          </div>
        )}

        {status === "error" && (
          <div style={{ 
            backgroundColor: colors.error, 
            color: '#991b1b', 
            padding: '12px', 
            borderRadius: '15px', 
            marginBottom: '20px',
            fontWeight: 'bold',
            border: '2px solid #f87171'
          }}>
            Something went wrong. Please try again 
          </div>
        )}

        <h2 style={{ color: colors.primary, marginBottom: '10px' }}>Send me a message! </h2>
        <p style={{ color: colors.text, fontSize: '0.9rem', marginBottom: '25px' }}>
          Send me a message and I'll get back to you as soon as possible!
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input name="name" type="text" placeholder="name" required style={inputStyle} />
          <input name="email" type="email" placeholder="email" required style={inputStyle} />
          <textarea name="message" placeholder="message" required rows="4" style={inputStyle}></textarea>
          
          <button 
            type="submit" 
            disabled={status === "sending"}
            style={{
              backgroundColor: status === "sending" ? "#d1d5db" : colors.primary,
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '50px',
              fontWeight: 'bold',
              cursor: status === "sending" ? "not-allowed" : "pointer",
              boxShadow: status === "sending" ? 'none' : '0 4px 0px #f472b6',
              marginTop: '10px',
              transition: 'all 0.2s'
            }}
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE ✨"}
          </button>
        </form>

        <div style={{ 
          marginTop: '30px', 
          borderTop: `2px dashed ${colors.secondary}`, 
          paddingTop: '20px' 
        }}>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: colors.text, 
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
