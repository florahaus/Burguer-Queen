import HeaderComponent from '../../componentes/Header/HeaderComp';
import './Login.css';
import LoginComp from '../../componentes/LoginComp/LoginComp.js';

function Login() {
  return (
    <div>
    <HeaderComponent/>
    <h3 className='pLogin'>LOGIN</h3>
    <div>
      <LoginComp/>
    </div>
    </div>
  );
}


export default Login;
