import { Link } from "react-router-dom";
import './menu.css'

export default function Menu(props)
{
    return(
        <header className="cabecera">
            <nav className="nav">
                <ul>
                    <li><Link to="/"><h3>Inicio</h3></Link></li>
                    <li><Link to="/dos"><h3>Pan Tradicional</h3></Link></li>
                    <li><Link to="/tres"><h3>Pan Vitaminicos</h3></Link></li>
                    <li><Link to="/cuatro"><h3>Queques Especiales</h3></Link></li>
                    <li><Link to="/cinco"><h3>Queques Combinados</h3></Link></li>
                    <li><Link to="/seis"><h3>Enpanadas</h3></Link></li>
                </ul>
            </nav>
        </header>
       
    );
}