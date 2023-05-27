import { useContext } from "react";
import ContatosContext from "../contexts/ContatosContext";

export default function Home() {
    const { meusContatos } = useContext(ContatosContext);

    return (
        <>
            <h2>Meus contatos</h2>
            <ul>
                {meusContatos.map((contato, key) => <li id={key}>{contato.nome} - {contato.telefone}</li>)}
            </ul>
        </>
    );
}