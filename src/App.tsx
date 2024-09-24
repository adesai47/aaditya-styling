// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Task from './Task';
import TaskList from './TaskList';
import Message from './Message';
import Post from './Post';
import HeatGrid from './HeatGrid';
import TabDescriptor from './TabDescriptor';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/task">Task Page</Link> | <Link to="/TaskList">Task List</Link> | <Link to="/Message">Message Thread</Link> | <Link to="/Post">Post</Link> | <Link to="/HeatGrid">HeatGrid</Link> | <Link to="/TabDescriptor">Tab Descriptor</Link>
      </nav>

      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/TaskList" element={<TaskList />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/HeatGrid" element={<HeatGrid />} />
        <Route path="/TabDescriptor" element={<TabDescriptor />} />
      </Routes>
    </div>
  );
};

export default App;
