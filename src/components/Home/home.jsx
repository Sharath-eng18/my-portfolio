import React from 'react';
import PaataluSample from '../../assets/paatalusample.jpg'
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header section */}
      <div className="header-section">
        <div className="header-content">
          <div className="header-tag">Recent project: EchoGPT</div>
          <h1 className="header-title">Aspiring AI Engineer<br/>B.Tech Student </h1>

          <p className="header-description">
            I'm Sharath, an Future AI Engineer enthusiast. After hours, I build my own projects.
          </p>
          <div className="profile-info">
            <div className="profile-image"></div>
            <div className="profile-name">Sharath</div>
          </div>
        </div>
      </div>

      {/* Project showcase */}
      <div className="project-showcase">
        <div className="project-card main-project">
          <div className="project-image">
            <img src={PaataluSample} alt="" />
          </div>
          <div className="project-info">
            <h3>Paatalu - A Music Player built on ReactJS</h3>
            <div className="project-links">
              <a href="https://paatalu-react.vercel.app/" className="project-link">View Project</a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="newsletter-section">
        <h2 className="section-title">Subscribe to Sharath's Newsletter</h2>
        <p className="newsletter-description">I share my work and ideas, design and code tips, and the occasional personal story.</p>
        
        <div className="newsletter-form">
          <input type="email" placeholder="Email" className="email-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="copyright">© 2025 • Design by Sharath • Built with React.js • Hosted on Vercel</div>
          <div className="social-links">
            {/* Social icons would go here */}
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;

