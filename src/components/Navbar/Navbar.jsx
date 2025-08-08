import React, { useState, useEffect } from 'react';

// The CSS styles are now included directly in the JSX file.
const Style = () => (
  <style>
    {`
      /* Import a font, for example, 'Inter' from Google Fonts */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

      /* Define color variables for easy theme management */
      :root {
        --background-color: #0d1117;
        --navbar-bg: rgba(22, 27, 34, 0.85);
        --navbar-border: rgba(255, 255, 255, 0.1);
        --text-color: #c9d1d9;
        --text-color-hover: #ffffff;
        --active-link-bg: #30363d;
        --icon-color: #8b949e;
      }

      /* Basic body styling */
      body {
        background-color: var(--background-color);
        font-family: 'Inter', sans-serif;
        color: var(--text-color);
        margin: 0;
        /* Add some padding to see the navbar and prevent content from going under it */
        padding-top: 120px; 
      }

      /* Main navbar container */
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        height: 80px;
        box-sizing: border-box;
        position: fixed; /* Make the navbar stick to the top */
        top: 10px; /* Add some space from the top of the viewport */
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 4rem); /* Make it responsive with padding on the sides */
        max-width: 1200px; /* Set a max-width for large screens */
        z-index: 1000; /* Ensure it's above other content */
      }
      
      .navbar-links-container {
        position: absolute; /* Position it relative to the navbar */
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--navbar-bg);
        border: 1px solid var(--navbar-border);
        border-radius: 999px; /* Pill shape */
        padding: 8px;
        backdrop-filter: blur(10px); /* Glassmorphism effect */
        -webkit-backdrop-filter: blur(10px);
      }

      /* Unordered list for the links */
      .navbar-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 8px; /* Space between list items */
      }

      /* Individual list item */
      .navbar-links li {
        transition: background-color 0.2s ease-in-out;
      }

      /* Styling for the link tags */
      .navbar-links a {
        display: flex;
        align-items: center;
        gap: 8px; /* Space between icon and text */
        padding: 10px 20px;
        color: var(--text-color);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        border-radius: 999px;
        white-space: nowrap;
        cursor: pointer;
      }

      /* Icon styling */
      .icon {
        fill: var(--icon-color);
        transition: fill 0.2s ease-in-out;
      }

      /* Hover effect for links */
      .navbar-links li:not(.active):hover a {
        color: var(--text-color-hover);
      }

      .navbar-links li:not(.active):hover .icon {
        fill: var(--text-color-hover);
      }

      /* Active link styling */
      .navbar-links li.active {
        background-color: var(--active-link-bg);
        border-radius: 999px;
      }

      .navbar-links li.active a,
      .navbar-links li.active .icon {
        color: var(--text-color-hover);
        fill: var(--text-color-hover);
      }
      
      .navbar-brand, .navbar-right {
        flex: 1;
      }
      
      .navbar-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 16px;
      }

      /* Time display */
      .navbar-time {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.5px;
      }

      /* Theme toggle button */
      .theme-toggle {
        cursor: pointer;
      }

      .theme-toggle .icon {
        fill: var(--text-color);
      }
    `}
  </style>
);


// A simple SVG icon component for demonstration
const Icon = ({ children, className }) => (
  <svg
    className={`icon ${className || ''}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    {children}
  </svg>
);

const Navbar = ({ onNavigate, activeSection }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Home', value: 'home', icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> },
    { name: 'About', value: 'about', icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /> },
    { name: 'Projects', value: 'projects', icon: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /> },
  ];

  return (
    <>
      <Style />
      <nav className="navbar">
        <div className="navbar-brand">Portfolio</div>
        <div className="navbar-links-container">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={activeSection === link.value ? 'active' : ''}
                onClick={() => onNavigate(link.value)}
              >
                <a>
                  <Icon>{link.icon}</Icon>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-right">
          <div className="theme-toggle">
            <Icon>
              <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
            </Icon>
          </div>
          <div className="navbar-time">{time}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;