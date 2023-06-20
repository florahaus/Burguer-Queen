import React, { useState} from "react"

const InputLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const mudança = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
          setEmail(value);
        } else if (name === 'password') {
          setPassword(value);
        }
      };

    return (
     <form className="formLogin">
      <label className="labelLogin">Email:</label> <br/>
        <input className="inputLogin" type="email" name="email" placeholder="email@flordeacucar.com" value={email} onChange={mudança}/>

      <label className="labelLogin">Senha:</label><br/>
        <input className="inputLogin" type="password" name="password" placeholder="*********" value={password} onChange={mudança}/>
      
      <button className="buttonLogin" type="submit">Entrar</button>
    </form>
    )
}
export default InputLogin;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          