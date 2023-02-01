import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const decrementCount = () => {
    setCount(prev => prev - 1);
  };

  const changeColor = e => {
    setColor(e.target.name);
  };

  return (
    <main className={color}>
      <section>
        <input
          type='text'
          value={input}
          onChange={handleChange}
        />
        <p className='output'>{input || 'output'}</p>
        <div className='button-container'>
          <button
            onClick={changeColor}
            name='react-blue'
          >
            react blue
          </button>
          <button
            onClick={changeColor}
            name=''
          >
            default
          </button>
        </div>
      </section>
      <section>
        <p className='output'>{count}</p>
        <div className='button-container'>
          <button onClick={incrementCount}>increment</button>
          <button onClick={decrementCount}>decrement</button>
        </div>
      </section>
    </main>
  );
}

export default App;
