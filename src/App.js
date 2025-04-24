import React from 'react';

function App() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '60px auto',
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#fdfdfd',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      borderRadius: '12px'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '5px', fontSize: '2.5em' }}>Muditha Sasanka</h1>
        <p style={{ color: '#555', fontSize: '1.2em' }}>
          Undergraduate | BICT | South Eastern University of Sri Lanka
        </p>
      </header>

      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '30px 0' }} />

      <section>
        <h2>🎓 Education</h2>
        <p><strong>Bachelor of Information and Communication Technology (BICT)</strong><br />
          South Eastern University of Sri Lanka</p>
      </section>

      <section style={{ marginTop: '25px' }}>
        <h2>🛠 Skills</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>React.js, JavaScript, HTML, CSS</li>
          <li>Laravel, PHP, MySQL</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Git & GitHub</li>
          <li>Linux Server Management (Red Hat, AWS EC2)</li>
        </ul>
      </section>

      <section style={{ marginTop: '25px' }}>
        <h2>💼 Projects</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Smart Accident Alert System with Integrated Fire Detection</strong><br />
            IoT-based vehicle safety system with GPS alerts and real-time fire detection.
          </li>
          <li><strong>Accident Safe</strong><br />
            Flutter app for emergency alerts, fire detection, GPS tracking & sensor control.
          </li>
          <li><strong>About Me Website</strong><br />
            Laravel-based portfolio hosted on Red Hat Linux with GitHub integration.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '25px' }}>
        <h2>📞 Contact</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:mudithasasanka7@gmail.com">mudithasasanka7@gmail.com</a><br />
          <strong>GitHub:</strong> <a href="https://github.com/mudithasasanka7" target="_blank" rel="noreferrer">github.com/mudithasasanka7</a>
        </p>
      </section>
    </div>
  );
}

export default App;
