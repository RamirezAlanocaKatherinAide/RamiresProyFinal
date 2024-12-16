import Menu from "../Componentes/Menu";
import CarruselM1 from "../Componentes/CarruselM1";
import CarrucelM2 from "../Componentes/CarrucelM2";
import CarruselM3 from "../Componentes/CarruselM3";
import './diseño.css'
import './inicio.css'
export default function Inicio (props){
    return(
        <div className="padre">
            <div className="cacecera"><img className="imgg" src="./baneer.jpg"></img></div>
            <div><Menu></Menu></div>
            <div className="MenuCuerpo">
                <div className="MenuCarusel">
                    <CarruselM1></CarruselM1>
                    <hr></hr>
                    <p className="pa">Hola, mi nombre es Alneglica Alanoca, soy una madre emprendedora con el sueño de tener <br></br> mi propia panadería. Quiero que la gente pueda disfrutar de los panes que con tanto cariño aprendí a hacer, <br></br>
                    panes que me enseñaron con paciencia y amor, y que para mí representan más que un alimento, <br></br>
                    son un pedacito de esfuerzo y dedicación. Mi meta es tener un lugar donde todos puedan probarlos y<br></br> 
                    sentir ese mismo cariño en cada bocado, un lugar que sea mío y que también sea para la gente. <br></br>
                    Este sueño es mi esperanza de darles algo mejor a mis hijos y a mi comunidad.
                    </p>
                    <br></br>
                    <p className="pa"><h3> MIS HIJOS</h3></p>
               </div> 
                    <div className="MenuCard1">
                        <CarrucelM2></CarrucelM2>
                        <hr></hr>

                        <h5 className="mision">MISION</h5>
                        <p className="pa">Nuestra compañía observa un futuro en el que lideramos la industria panadera a nivel mundial, con los mejores productos, clientes, inversionistas, proveedores y empleados satisfechos, además, de ser pioneros en productos y un servicio que le encante a las próximas generaciones.</p>
                        
                    </div>
                    <div className="MenuCard2">
                        <CarruselM3></CarruselM3>
                        <hr></hr>
                        <h5 className="mision">VISION</h5>
                        <p className="pa">My Bread es mucho más que una panadería, es una gran familia en la que todos los días se trabaja para satisfacer las necesidades y gustos de los clientes, nuestra misión es garantizar la más alta calidad en productos y un servicio a la altura de las expectativas, de esta manera no solo aumentaremos la cifra de ventas sino que nos continuaremos expandiendo por el territorio nacional e internacional en un futuro cercano.</p>
                    </div>
            </div>
            <div className="footer">
                <h3 className="pie">© 2024 - Todos Los Derechos Reservado . || . 
                Pagina Creada por Katherin Aide Ramirez Alanoca</h3>
            </div>
        </div>
    );
}