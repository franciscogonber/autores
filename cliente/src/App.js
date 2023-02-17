import './App.css';
import Detalle from './componentes/Detalle';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormularioEditar from './componentes/FormularioEditar';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Lista />}></Route>
          <Route path='/new' element={ <Formulario />}></Route>
          <Route path='/edit/:id' element={<FormularioEditar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
