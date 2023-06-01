import React, { useState, useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

export default function Login() {
    const global = useContext(GlobalContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    const [invalido, setInvalido] = useState(false);
    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });
        
    async function handleSubmit(e) {
        e.preventDefault(e);
        await signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
            global.setIsAuth(true);
            navigate("/admin");
            const user = userCredential.user;
            setInvalido(false);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setInvalido(true);
        });
    }
    return (<div>
    <form>
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="email" name="email" placeholder="ingrese el email"></input>
        <label htmlFor="password">Constraseña</label>
        <input onChange={handleChange} type="password" name="password" placeholder="ingrese la contraseña"></input>
        <button onClick={(e) => handleSubmit(e)} type="submit">Ingresar</button>
    </form>
    {invalido && <h1>Usuario o contraseña inválidos</h1>}
    </div>)
}