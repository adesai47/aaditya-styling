import { useState } from 'react';

const Task = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleCheckboxChange = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '32px' }}>Task</h1>

      <div style={{ width: '40%' }}>
        <div
          style={{
            backgroundColor: isComplete ? '#E2FFE5' : '#ffffff',
            border: isComplete ? '2px solid transparent' : '2px solid #3b82f6',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <input
            type="checkbox"
            style={{
              height: '24px',
              width: '24px',
              borderRadius: '4px',
              border: isComplete ? '2px solid #359845' : '2px solid #d1d5db',
              backgroundColor: isComplete ? '#359845' : '#ffffff',
              appearance: 'none',
              cursor: 'pointer',
            }}
            checked={isComplete}
            onChange={handleCheckboxChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '400', color: 'black', margin: '0' }}>
              Sweep the Kitchen
            </h3>
            <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>
              Get under the cabinets, do a good job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
