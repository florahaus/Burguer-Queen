import api from "./API";

 function ApiLogin(email, password) {
    return api.post('http://localhost:8080/login', 
    { email, password }
)}
export default ApiLogin;