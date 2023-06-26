import './LoginComp.css'
import React, { useState} from "react"
import ApiLogin from '../../API/APILogin';
import { useNavigate } from 'react-router-dom';
import Input from '../Inputs/Input.js';
import Botao from '../Botao/Botao.js';


const LoginComp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    const onChange = (event) => {
        const { name, value } = event.target;
        if(name === 'email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        }
    };

    const sendLogin = async (evento) => {
        evento.preventDefault()
        try{
            const response = await ApiLogin(email, password)
            // const jsonData = await response.json();
            if(response.status > 299){
                setErro('deu erro')
            } else {
                navigate('/pedidos')
            }
        } catch(error){
            setErro(error.response.data)
        }
    }
    return (
        <>
        <form className='formLogin'>
            <label className='labelLogin'>E-mail:</label>
           
            <Input className='inputLogin' placeholder='email@flordeacucar.com' type='email' name='email' value={email} onChange={onChange}/>
            
            <label className='labelLogin'>Senha:</label>
            
            <Input className='inputLogin' placeholder='********' type='password' name='password' value={password} onChange={onChange}/> 
            
            <Botao className='botaoLogin' type='submit' onClick={sendLogin} text='Entrar'/>
            <p className='paragrafoErroLogin'>{erro}</p>
            </form>
            
        </>
    )
}
export default LoginComp
