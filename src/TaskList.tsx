import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Dishwashing', description: 'Wash and dry dishes, pots, pans, and utensils', isComplete: true },
    { id: 2, title: 'Laundry', description: 'Wash, dry, fold, and put away clothes and linens.', isComplete: false },
    { id: 3, title: 'Vacuuming', description: 'Vacuum carpets, rugs, and floors throughout the house', isComplete: false },
    { id: 4, title: 'Dusting', description: 'Dust furniture, shelves, and other surfaces', isComplete: false },
  ]);

  const handleCheckboxChange = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );

    const sortedTasks = [...updatedTasks].sort((a, b) => (a.isComplete === b.isComplete ? 0 : a.isComplete ? -1 : 1));
    setTasks(sortedTasks);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px' }}>Task List</h1>
      <div style={{ width: '40%' }}>
        {tasks.map(task => (
          <div
            key={task.id}
            style={{
              backgroundColor: task.isComplete ? '#E2FFE5' : '#ffffff',
              border: task.isComplete ? '2px solid transparent' : '2px solid #d1d5db',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px',
              boxShadow: task.isComplete ? '' : '0 0 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <input
              type="checkbox"
              style={{
                height: '24px',
                width: '24px',
                borderRadius: '4px',
                border: '2px solid #d1d5db',
                backgroundColor: task.isComplete ? '#359845' : '#ffffff',
                appearance: 'none',
                cursor: 'pointer',
                display: 'block', // Ensures consistency
              }}
              checked={task.isComplete}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '400', color: 'black', margin: '0' }}>
                {task.title}
              </h3>
              <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
