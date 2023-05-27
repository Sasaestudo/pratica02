import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <ul>
            <li><NavLink to="/">Contatos</NavLink></li>
            <li><NavLink to="novo">Novo Contato</NavLink></li>
        </ul>
    );
}