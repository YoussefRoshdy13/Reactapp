import { Routes, Route } from 'react-router-dom';
import Hello from './Hello';  // Component name should start with an uppercase letter
import FormComponent from './FormComponent';
import Home from './Home';  // Make sure this line is present
import CounterPage from './CounterPage'; // Ensure this path is correct
import DisplaySquaredValue from './DisplaySquaredValue'; // Import the new component

import './style.css';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* Component usage should start with an uppercase letter */}
        <Route path="/hello" element={<Hello />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/counterPage" element={<CounterPage />} /> {/* Update route for CounterPage */}
        <Route path="/display-squared" element={<DisplaySquaredValue />} /> {/* New route */}


      </Routes>
    </div>
  );
}

export default App;
