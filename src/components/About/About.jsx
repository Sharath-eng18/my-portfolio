import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/profile.jpg'

// A custom hook to check for media queries
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};


// Main App Component
export default function App() {
  return <AboutPage />;
}

// Base styles (mostly unchanged)
const styles = {
  container: {
    backgroundColor: '#0a0a0a00',
    color: '#E5E7EB',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    minHeight: '100vh',
    transition: 'padding 0.3s ease-in-out', // Smooth transition for padding change
  },
  mainContent: {
    display: 'flex',
    gap: '4rem',
    maxWidth: '1200px',
    width: '100%',
    transition: 'flex-direction 0.3s ease-in-out', // Smooth transition for layout change
  },
  leftNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    paddingTop: '10rem',
    width: '150px',
    flexShrink: 0, // Prevent nav from shrinking
  },
  navLink: {
    color: '#9CA3AF',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  activeNavLink: {
    color: '#F9FAFB',
    fontWeight: '600',
  },
  rightContent: {
    flex: 1,
    minWidth: 0, // Prevents content from overflowing flex container
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #374151',
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  title: {
    fontSize: '1.125rem',
    color: '#9CA3AF',
  },
  contactButtons: {
    display: 'flex',
    flexWrap: 'wrap', // Allow buttons to wrap on small screens
    gap: '0.5rem',
    marginTop: '1rem',
  },
  contactButton: {
    backgroundColor: '#1F2937',
    color: '#E5E7EB',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid #374151',
  },
  introText: {
    lineHeight: '1.6',
    color: '#D1D5DB',
    maxWidth: '65ch',
    marginBottom: '3rem',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #374151',
    paddingBottom: '0.75rem',
  },
  experienceItem: {
    marginBottom: '2rem',
  },
  experienceHeader: {
    display: 'flex',
    flexDirection: 'row', // Default direction
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '0.5rem',
    flexWrap: 'wrap', // Allow wrapping for small screens
  },
  companyName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#F3F4F6',
  },
  jobTitle: {
    fontSize: '0.875rem',
    color: '#9CA3AF',
  },
  date: {
    color: '#9CA3AF',
    fontSize: '0.875rem',
    flexShrink: 0, // Prevent date from wrapping weirdly
    marginLeft: '1rem', // Add some space when it's on the same line
  },
  list: {
    listStyle: 'none',
    paddingLeft: '1.5rem',
  },
  listItem: {
    position: 'relative',
    marginBottom: '0.75rem',
    color: '#D1D5DB',
    lineHeight: '1.5',
  },
  listItemBullet: {
    position: 'absolute',
    left: '-1.5rem',
    top: '0.5rem',
    width: '6px',
    height: '6px',
    backgroundColor: '#4B5563',
    borderRadius: '50%',
  },
  studyItem: {
    marginBottom: '1rem',
  },
  institution: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#F3F4F6',
  },
  field: {
    color: '#9CA3AF',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  skillCard: {
    backgroundColor: '#1F2937',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #374151',
  },
  skillName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#F3F4F6',
  },
  skillDescription: {
    color: '#9CA3AF',
    fontSize: '0.875rem',
    lineHeight: '1.5',
  },
};


// Reusable components (Unchanged)
const ListItem = ({ children }) => (
  <li style={styles.listItem}>
    <span style={styles.listItemBullet}></span>
    {children}
  </li>
);

const ExperienceItem = ({ company, title, date, points }) => (
  <div style={styles.experienceItem}>
    <div style={styles.experienceHeader}>
      <div>
        <h3 style={styles.companyName}>{company}</h3>
        <p style={styles.jobTitle}>{title}</p>
      </div>
      <span style={styles.date}>{date}</span>
    </div>
    <ul style={styles.list}>
      {points.map((point, index) => (
        <ListItem key={index}>{point}</ListItem>
      ))}
    </ul>
  </div>
);

const StudyItem = ({ institution, field }) => (
    <div style={styles.studyItem}>
        <h3 style={styles.institution}>{institution}</h3>
        <p style={styles.field}>{field}</p>
    </div>
);

const SkillCard = ({ name, description }) => (
  <div style={styles.skillCard}>
    <h3 style={styles.skillName}>{name}</h3>
    <p style={styles.skillDescription}>{description}</p>
  </div>
);


// The main About Page component
const AboutPage = () => {
  // Use the hook to check for mobile screen size. 900px is a common breakpoint for this type of layout change.
  const isMobile = useMediaQuery('(max-width: 900px)');

  // Create a dynamic styles object that merges base styles with mobile-specific overrides
  const dynamicStyles = {
    container: {
      ...styles.container,
      ...(isMobile && { padding: '1rem' }), // Reduce padding on mobile
    },
    mainContent: {
      ...styles.mainContent,
      ...(isMobile && { flexDirection: 'column', gap: '2rem' }), // Stack main content vertically
    },
    leftNav: {
      ...styles.leftNav,
      ...(isMobile && {
        flexDirection: 'row', // Make nav horizontal
        justifyContent: 'center', // Center nav links
        width: '100%',
        paddingTop: 0, // Remove top padding
        gap: '1rem',
        flexWrap: 'wrap', // Allow nav links to wrap
        borderBottom: '1px solid #374151', // Add a separator
        paddingBottom: '1rem',
      }),
    },
    header: {
      ...styles.header,
      ...(isMobile && {
        flexDirection: 'column', // Stack header content vertically
        textAlign: 'center', // Center align header text
      }),
    },
    headerInfo: {
        ...styles.headerInfo,
        ...(isMobile && {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        })
    },
    experienceHeader: {
        ...styles.experienceHeader,
        ...(isMobile && {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.25rem'
        })
    },
    date: {
        ...styles.date,
        ...(isMobile && { marginLeft: 0}) // Remove margin on mobile
    },
    skillsGrid: {
        ...styles.skillsGrid,
        ...(isMobile && { gridTemplateColumns: '1fr' }) // Stack skill cards in a single column
    }
  };


  return (
    <div style={dynamicStyles.container}>
      <div style={dynamicStyles.mainContent}>
        {/* Left Navigation */}
        <nav style={dynamicStyles.leftNav}>
          <a href="#introduction" style={{...styles.navLink, ...styles.activeNavLink}}>Introduction</a>
          <a href="#work-experience" style={styles.navLink}>Work Experience</a>
          <a href="#studies" style={styles.navLink}>Studies</a>
          <a href="#technical-skills" style={styles.navLink}>Technical skills</a>
        </nav>

        {/* Right Content */}
        <main style={styles.rightContent}>
          <header style={dynamicStyles.header}>
            <img 
                src={profileImage}
                alt="Sharath Chandra" 
                style={styles.profileImage} 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/80x80/1F2937/E5E7EB?text=SC'; }}
            />
            <div style={dynamicStyles.headerInfo}>
              <h1 style={styles.name}>Sharath Chandra Gannamaneni</h1>
              <p style={styles.title}>AI Engineer</p>
              <div style={styles.contactButtons}>
                <a href="https://github.com/Sharath-eng18" style={styles.contactButton}>GitHub</a>
                <a href="https://www.linkedin.com/in/sharath-chandra-gannamaneni-88712a330" style={styles.contactButton}>LinkedIn</a>
                <a href="#" style={styles.contactButton}>Threads</a>
                <a href="#" style={styles.contactButton}>Email</a>
              </div>
            </div>
          </header>

          <section id="introduction" style={styles.section}>
            <p style={styles.introText}>
              I am Sharath, a dedicated B.Tech student at Joginpally B.R. Engineering College with a strong passion for Artificial Intelligence. My academic journey is focused on building a solid foundation in computer science and machine learning, with the ultimate goal of becoming an AI Engineer who develops innovative and impactful solutions to real-world problems. I am actively honing my skills in Python, data analysis, and deep learning frameworks and am eager to apply this knowledge to challenging projects.
            </p>
          </section>

          <section id="work-experience" style={styles.section}>
            <h2 style={styles.sectionTitle}>Work Experience</h2>
            <div>Currently studing B.Tech 2nd Year at JOGINPALLY B.R. ENGINEERING COLLEGE</div>
          </section>

          <section id="studies" style={styles.section}>
            <h2 style={styles.sectionTitle}>Studies</h2>
            <StudyItem 
                institution="JOGINPALLY B.R. ENGINEERING COLLEGE"
                field="Computer Science and Engineering"
            />
             <StudyItem 
                institution="NARAYANA JR COLLEGE"
                field="Intermediate"
            />
          </section>

          <section id="technical-skills" style={styles.section}>
            <h2 style={styles.sectionTitle}>Technical Skills</h2>
            <div style={dynamicStyles.skillsGrid}>
              <SkillCard
                name="Python"
              />
              <SkillCard
                name="HTML"
              />
              <SkillCard
                name="CSS"
              />
              <SkillCard
                name="JavaScript"
              />
              <SkillCard
                name="ReactJS"
              />
              <SkillCard
                name="MySQL"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};