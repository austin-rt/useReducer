import { useState, useReducer } from 'react';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const incrementCount = () => {
    dispatch({ type: 'increment' });
  };

  const decrementCount = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main>
      <section>
        <input
          type='text'
          value={input}
          onChange={handleChange}
        />
        <p className='output'>{input || 'output'}</p>
      </section>
      <section>
        <p className='output'>{state.count}</p>
        <div className='button-container'>
          <button onClick={incrementCount}>increment</button>
          <button onClick={decrementCount}>decrement</button>
        </div>
      </section>
    </main>
  );
}

export default App;
