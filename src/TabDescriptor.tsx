import React, { useState } from 'react';

const TabDescriptor: React.FC = () => {
  const people = [
    {
      name: 'Nicki',
      image: '/nicki.png',
      description: 'A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.',
    },
    {
      name: 'Jake',
      image: '/jake.png', 
      description: 'A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.',
    },
    {
      name: 'Melissa',
      image: '/woman.png', 
      description: 'A 30-year-old fitness trainer passionate about helping others stay healthy and fit. Loves nature and outdoor activities.',
    },
  ];


  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.tabs}>
          {people.map((person, index) => (
            <button
              key={index}
              onClick={() => setSelectedPerson(person)}
              style={{
                ...styles.tab,
                ...(selectedPerson.name === person.name ? styles.activeTab : {}),
              }}
            >
              {person.name}
            </button>
          ))}
        </div>

        <div style={styles.content}>
          <img src={selectedPerson.image} alt={selectedPerson.name} style={styles.image} />
          <p style={styles.description}>{selectedPerson.description}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    backgroundColor: 'black',
  } as React.CSSProperties,
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  } as React.CSSProperties,
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '20px',
  } as React.CSSProperties,
  tab: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    margin: '0 5px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    color:'black'
  } as React.CSSProperties,
  activeTab: {
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  } as React.CSSProperties,
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '100%',
  } as React.CSSProperties,
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '15px',
    border: '3px solid #bdbdbd',
  } as React.CSSProperties,
  description: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
  } as React.CSSProperties,
};

export default TabDescriptor;
