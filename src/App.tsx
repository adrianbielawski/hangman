import './App.css';
import GamePage from 'components/GamePage';
import { useReducer } from 'react';
import { Context, initialState, reducer } from 'store';
import CategoryMenu from 'components/CategoryMenu';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = {
    state,
    dispatch,
  }

  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        {state.wordToGuess === null ? (
          <CategoryMenu />
        ) : (
          <GamePage />
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
