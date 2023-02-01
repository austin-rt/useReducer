import { useState, useReducer } from 'react';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return { ...state, count: state.count - 1 };
      case 'input':
        return { ...state, input: action.payload };
      case 'changeColor':
        return { ...state, color: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    input: '',
    color: 'white'
  });

  const handleChange = e => {
    dispatch({ action: { payload: e.target.value } });
  };

  const incrementCount = () => {
    dispatch({ type: 'increment' });
  };

  const decrementCount = () => {
    dispatch({ type: 'decrement' });
  };

  const changeColor = e => {
    dispatch({ type: 'changeColor', payload: e.target.name });
  };

  return (
    <main className={state.color}>
      <section>
        <input
          type='text'
          value={state.input}
          onChange={handleChange}
        />
        <p className='output'>{state.input || 'output'}</p>
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
            white
          </button>
        </div>
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
