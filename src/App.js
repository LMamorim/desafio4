import './App.css';
import Navbar from './Components/Navbar'
import Titulo from './Components/Titulo'
import Cabecalho from './Components/Cabecalho'
import Lista from './Components/Lista'
import NovaTarefa from './Components/NovaTarefa'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo/>
      <Cabecalho/>
      <Lista/>
      <NovaTarefa/>
    </div>
    
  );
}

export default App;

