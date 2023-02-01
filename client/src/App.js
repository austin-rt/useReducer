import { useReducer } from 'react';

// typically a dedicated reducer file
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

// typically a dedicated action file

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  INPUT: 'input',
  CHANGE_COLOR: 'changeColor'
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    input: '',
    color: ''
  });

  const handleChange = e => {
    dispatch({ type: ACTION.INPUT, payload: e.target.value });
  };

  const incrementCount = () => {
    dispatch({ type: ACTION.INCREMENT });
  };

  const decrementCount = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  const changeColor = e => {
    dispatch({ type: ACTION.CHANGE_COLOR, payload: e.target.name });
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
            default
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
