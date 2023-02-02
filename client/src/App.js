import { useReducer } from 'react';

const initialState = {
  count: 0,
  darkMode: true,
  input: ''
};

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  DARK_MODE: 'darkMode',
  INPUT: 'input'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.DARK_MODE:
      return { ...state, darkMode: action.payload };
    case ACTION.INPUT:
      return { ...state, input: action.payload };
    default:
      console.log(`Action ${action.type} not found.`);
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCount = () => {
    dispatch({ type: ACTION.INCREMENT });
  };

  const decrementCount = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  const changeTheme = e => {
    dispatch({ type: ACTION.DARK_MODE, payload: !state.darkMode });
  };

  const handleInputChange = e => {
    dispatch({ type: ACTION.INPUT, payload: e.target.value });
  };

  return (
    <main className={state.darkMode ? 'dark' : ''}>
      <section>
        <h2>counter</h2>
        <p className='output'>{state.count || 0}</p>
        <div className='button-container'>
          <button onClick={incrementCount}>increment</button>
          <button onClick={decrementCount}>decrement</button>
        </div>
      </section>
      <section>
        <h2>theme</h2>
        <div className='button-container'>
          <button onClick={changeTheme}>
            {state.darkMode ? 'light mode' : 'dark mode'}
          </button>
        </div>
      </section>
      <section>
        <h2>input</h2>
        <input
          type='text'
          value={state.input}
          onChange={handleInputChange}
        />
        <p className='output'>{state.input.trim() || 'user input'}</p>
      </section>
    </main>
  );
}

export default App;
