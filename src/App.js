import './styles.css';
import Titulo from './components/Titulo';
import { Counter } from './components/Counter';
import { useCounter } from './hooks/useCounter';

function App() {

  const {
    counter, 
    increase, 
    decrease, 
    reset
  } = useCounter();

  // Verificar que sea par
  const esPar = counter % 2 === 0;

  return (
    
    <div className="container">
      <div className="card">
        <Titulo title="CONTADOR"/>

        <Counter counter={counter}/>
        <p className="parrafo">{esPar ? 'ES PAR' : 'ES IMPAR'}</p>
        
        <div className="btn">
          <button className="down" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>CE</button>
          <button className="up" onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
