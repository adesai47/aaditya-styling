// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Task from './Task';
import TaskList from './TaskList';
import Message from './Message';
import Post from './Post';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/task">Task Page</Link> | <Link to="/TaskList">Task List</Link> | <Link to="/Message">Message Thread</Link> | <Link to="/Post">Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/task" element={<Task />} />
        <Route path="/TaskList" element={<TaskList />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
