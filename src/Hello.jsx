import { useNavigate } from 'react-router-dom';

function Hello() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello Rico</h1>
      <button onClick={() => navigate('/form')}>
        Go to Form
      </button>
    </div>
  );
}

export default Hello;
