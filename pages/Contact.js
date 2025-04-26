import React from 'react';

function Contact() {
  const containerStyle = {
    textAlign: 'center',
    fontSize: '20px',
    padding: '30px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    width: '300px'
  };

  return (
    <div style={containerStyle}>
      <h2>Kontakt</h2>
      <form style={formStyle}>
        <input type="text" placeholder="Twoje imię" style={inputStyle} />
        <input type="email" placeholder="Twój email" style={inputStyle} />
        <textarea placeholder="Twoja wiadomość" rows="5" style={inputStyle}></textarea>
        <button type="submit" style={{ ...inputStyle, cursor: 'pointer' }}>Wyślij</button>
      </form>
    </div>
  );
}

export default Contact;
