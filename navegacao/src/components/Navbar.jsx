import { NavLink, useNavigate } from "react-router-dom"
import './Navbar.css'

export default function Navbar(props) {
    const navigate = useNavigate()
    const perfil = `perfil/${props.id}`

    function handleClick(event) {
        props.onLogout(event)
        navigate('/login')
    }

    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={perfil}>Perfil</NavLink></li>
            <li><button onClick={handleClick}>Sair</button></li>
        </ul>
    )
}