import { Outlet } from 'react-router-dom';
import './layout.css';
import Navbar from './Navbar';

export default function layout() {
    return (
        <>
            <header>
                <h1>@Contatinhos</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copyright 2023.</p>
            </footer>
        </>
    );
}