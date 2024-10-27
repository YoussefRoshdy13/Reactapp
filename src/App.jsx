// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Hello from './Hello';  // Import Hello component
import FormComponent from './FormComponent'; // Import FormComponent
import Home from './Home';  // Import Home component
import CounterPage from './CounterPage'; // Import CounterPage component
import DisplaySquaredValue from './DisplaySquaredValue'; // Import DisplaySquaredValue component
import UserList from './UserList'; // Import UserList component

import './style.css'; // Import global styles
import './App.css';  // Import additional styles for App component

function App() {
  return (
    <div>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/hello" element={<Hello />} /> {/* Hello route */}
        <Route path="/form" element={<FormComponent />} /> {/* FormComponent route */}
        <Route path="/counterPage" element={<CounterPage />} /> {/* CounterPage route */}
        <Route path="/display-squared" element={<DisplaySquaredValue />} /> {/* DisplaySquaredValue route */}
        <Route path="/user-list" element={<UserList />} /> {/* UserList route */}
      </Routes>
    </div>
  );
}

export default App;
