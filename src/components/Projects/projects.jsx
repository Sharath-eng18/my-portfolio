import React from 'react';
import PaataluMockup from '../../assets/paatalu-mockup.jpg'
import EchoGPTMockup from '../../assets/EchoGPT-Mockup.png'

// --- CSS Styles (as objects) ---
const styles = {
  // Main container styles
  app: {
    backgroundColor: '#0a0a0a00',
    color: '#e2e8f0',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
  },
  // Main content container
  mainContent: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  // Project Card styles
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1rem',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '1rem',
    transition: 'transform 0.3s ease-in-out',
  },
  // Simple glow effect behind the image
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '120%',
    height: '120%',
    background: 'radial-gradient(circle, rgba(128, 90, 213, 0.3) 0%, rgba(128, 90, 213, 0) 60%)',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1',
    filter: 'blur(50px)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cardTitle: {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#f8fafc',
  },
  cardDescriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  avatar: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  caseStudyLink: {
    color: '#a78bfa',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  // Footer styles
  footer: {
    width: '100%',
    maxWidth: '800px',
    marginTop: '6rem',
    padding: '2rem 0',
    borderTop: '1px solid #334155',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#64748b',
  },
  footerLinks: {
    display: 'flex',
    gap: '1rem',
  },
  footerLink: {
    color: '#94a3b8',
    textDecoration: 'none',
  },
};

// --- Reusable Project Card Component ---
const ProjectCard = ({ title, description, imgSrc, author, authorImgSrc, linkText = "Read case study" }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <div style={styles.glow}></div>
        <img
          src={imgSrc}
          alt={title}
          style={styles.image}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x450/0a0a0a/e2e8f0?text=Image+Not+Found'; }}
        />
      </div>
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <div style={styles.cardDescriptionContainer}>
          <img
            src={authorImgSrc}
            alt={author}
            style={styles.avatar}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/334155/e2e8f0?text=A'; }}
          />
          <p style={styles.cardDescription}>{description}</p>
        </div>
        <a href="https://github.com/Sharath-eng18/" style={styles.caseStudyLink}>
          {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const projects = [
    {
      id: 1,
      title: "Paatalu - A Music Player built on ReactJS",
      description: "Paatalu is a sleek and intuitive music player designed for an immersive and seamless listening experience.Built with React, it offers a fast, dynamic, and responsive interface for you to enjoy all your favorite tracks.",
      imgSrc: PaataluMockup,
      author: "Sharath",
      authorImgSrc: "https://placehold.co/40x40/4f46e5/ffffff?text=A"
    },
    {
      id: 2,
      title: "EchoGPT - A Chatbot built using LangChain",
      description: "EchoGPT is a chatbot that uses LangChain to understand and respond to user queries. It is built using React and Flask as its backend.",
      imgSrc: EchoGPTMockup,
      author: "Sharath",
      authorImgSrc: "https://placehold.co/40x40/334155/e2e8f0?text=A"
    },
  ];

  return (
    <div style={styles.app}>
      <main style={styles.mainContent}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            author={project.author}
            authorImgSrc={project.authorImgSrc}
          />
        ))}
      </main>
      <footer style={styles.footer}>
        <div>© 2025 / Built with React</div>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>GitHub</a>
          <a href="#" style={styles.footerLink}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
