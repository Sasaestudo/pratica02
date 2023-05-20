import { Outlet } from "react-router";
import Navbar from "./Navbar";
import './Layout.css'

export default function Layout(props) {
    return (
        <>
            <Navbar id={props.id} onLogout={props.onLogout} />
            <Outlet />
        </>
    )
}