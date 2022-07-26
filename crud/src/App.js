import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu'
import Home from './components/Home';
import ListaDepartamentos from './components/ListaDepartamentos';
import FormDepartamentos from './components/FormDepartamentos';



function App() {
  return (
    <>
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/departamentos' element={<ListaDepartamentos />}/>
          <Route path='departamentos/new' element={<FormDepartamentos />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
