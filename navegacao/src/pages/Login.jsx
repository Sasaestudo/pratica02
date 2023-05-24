//import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginRHF from "./LoginRHF";

export default function Login(props) {

    return (
        <>
            <h1>Login</h1>
            {/* Vira um LoginForm virou uma tag  */}
            {/*<LoginForm onSubmit={handleClick}/>*/}
            {/*<LoginRHF onSubmit={handleClick}/>*/}
            <LoginRHF/>
        </>
    )
}