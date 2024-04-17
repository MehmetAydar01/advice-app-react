import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({
    advice: '',
  });

  const fetchAdvice = async () => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      const { advice } = res.data.slip;
      setData({ advice });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{data.advice}</h1>
          <button className='button' onClick={handleClick}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
