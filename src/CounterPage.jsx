import React, { useState, useMemo, useEffect } from 'react'; // Import useEffect for local storage
import { useNavigate } from 'react-router-dom';

const CounterPage = () => {
  const [count, setCount] = useState(() => { // Initialize state with a function
    const savedCount = localStorage.getItem('count'); // Retrieve count from local storage
    return savedCount !== null ? JSON.parse(savedCount) : 0; // Parse and return saved count or 0 if not found
  });
  
  const navigate = useNavigate();

  const squaredValue = useMemo(() => {
    console.log('Calculating squared value...');
    return count * count;
  }, [count]);

  // Effect to save count to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count)); // Save count to local storage
  }, [count]);

  const handleNavigate = () => {
    navigate('/display-squared', { state: { squaredValue } }); // Pass squaredValue in state
  };

  return (
    <div className="form-container">
      <h1>Counter Page</h1>
      <h2>Current Count: {count}</h2>
      <h2>Squared Value: {squaredValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={handleNavigate}>Go to Display Squared Value</button> {/* Navigate to new page */}
    </div>
  );
};

export default CounterPage;
