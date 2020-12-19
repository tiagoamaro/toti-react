import './App.css';
import MeusDados from './MeusDados';

function App() {
  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <ul>
        <li>
          <input type="checkbox" />
          Batata
        </li>
        <li>
          <input type="checkbox" />
          Cenoura
        </li>
        <li>
          <input type="checkbox" />
          Maçãs
        </li>
      </ul>

      <MeusDados />
    </div>
  );
}

export default App;
