import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to My First React App</h1>
      <p>Choose a page to visit:</p>
      <button onClick={() => navigate('/hello')}>Go to Hello Page</button>
      <button onClick={() => navigate('/form')}>Go to Form Page</button>
      <button onClick={() => navigate('/CounterPage')}>Go to Counter</button>
    </div>
  );
}

export default Home;
