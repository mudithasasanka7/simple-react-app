import React from 'react';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <h1 style={{ textAlign: 'center' }}>Muditha Sasanka</h1>
      <h3 style={{ textAlign: 'center', color: 'gray' }}>Undergraduate | BICT | South Eastern University of Sri Lanka</h3>

      <hr />

      <section>
        <h2>🎓 Education</h2>
        <p><strong>Bachelor of Information and Communication Technology (BICT)</strong><br />
        South Eastern University of Sri Lanka</p>
      </section>

      <section>
        <h2>🛠 Skills</h2>
        <ul>
          <li>React.js, JavaScript, HTML, CSS</li>
          <li>Laravel, PHP, MySQL</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Git & GitHub</li>
          <li>Linux Server Management (Red Hat, AWS EC2)</li>
        </ul>
      </section>

      <section>
        <h2>💼 Projects</h2>
        <ul>
          <li><strong>Smart Accident Alert System with Integrated Fire Detection</strong> – IoT based vehicle safety system with fire sensors and GPS alerting.</li>
          <li><strong>Accident Safe</strong> – Flutter app for accident detection, emergency notification & mode control.</li>
          <li><strong>About Me Website</strong> – Laravel hosted project on Red Hat Linux with GitHub automation.</li>
        </ul>
      </section>

      <section>
        <h2>📞 Contact</h2>
        <p>Email: mudithasasanka7@gmail.com<br />
        GitHub: <a href="https://github.com/mudithasasanka7" target="_blank" rel="noreferrer">mudithasasanka7</a></p>
      </section>
    </div>
  );
}

export default App;
