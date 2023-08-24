import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card-container'>
        <Todo title='Learn React Section 1' />
        <Todo title='Learn React Section 2' />
        <Todo title='Learn React Section 3' />
      </div>
    </div>
  );
}

export default App;
