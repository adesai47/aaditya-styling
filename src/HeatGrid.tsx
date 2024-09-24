import React from 'react';

const colors = ['#3E5FCC', '#D9E2FA', '#D9D9D9', '#9EB0E5'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const HeatGrid: React.FC = () => {
  const gridItems = Array(28).fill(null).map(() => getRandomColor());

  const renderGrid = () => {
    return gridItems.map((color, index) => (
      <div key={index} style={{ backgroundColor: color, ...styles.box }} />
    ));
  };

  return (
    <div style={styles.container}>
      {/* Days of the week labels */}
      {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
        <div key={index} style={styles.dayLabel}>
          {day}
        </div>
      ))}
      {/* Calendar grid */}
      {renderGrid()}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 60px)',
    gridTemplateRows: 'repeat(6, 60px)',
    gap: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  } as React.CSSProperties,
  dayLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: '10px',
  } as React.CSSProperties,
  box: {
    width: '60px',
    height: '60px',
    borderRadius: '4px',
  } as React.CSSProperties,
};

export default HeatGrid;
