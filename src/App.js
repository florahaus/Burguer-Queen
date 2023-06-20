import HeaderComponent from './componentes/header/headerComp';
import './App.css';
import InputLogin from './componentes/inputs/inputLogin';

function App() {
  return (
    <div>
    <HeaderComponent/>
    <h3 className='pLogin'>LOGIN</h3>
    <div>
      <InputLogin/>
    </div>
    </div>
  );
}


export default App;
