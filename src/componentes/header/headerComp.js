import logo from '../../imagens/logo.png'
import './HeaderComp.css'

const HeaderComponent = () => {
    return (
        <header className="container-logo">
        <img id="logo" src={logo} alt="imagem de uma flor com 4 petálas de cor laranja e folhas verdes"/>
        </header>   
    )
}
export default HeaderComponent;