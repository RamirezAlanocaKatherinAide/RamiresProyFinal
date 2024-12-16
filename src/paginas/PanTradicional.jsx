import Menu from "../Componentes/Menu";
import CardR from '../Componentes/CardR';
import './diseño.css'
import './inicio.css'
export default function PanTradicional (props){
    return(
        <div className="padre">
            <div className="cacecera"><img className="imgg" src="./baneer.jpg"></img></div>
            <div><Menu></Menu></div>
            <div className="cuerpo">
                {/* card reutilizable aqui */}
                <div className="cuerpo1">
                <CardR
                    imageSrc="/PanTradicional/caucaa.jpg"
                    title="CAUCA"
                    subtitle="Pan Paceño"
                    text="Con manteca y harina de trigo, su cubierta es crocante y su interior es más suave.2​ Usualmente, antes del horneado, se aplana la parte del centro de la masa para que al salir del horno el pan esté semi-partido en dos, como si fueran gemelos"
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo2">
                <CardR
                    imageSrc="/PanTradicional/marraqueta.jpg"
                    title="MARRAQUETA"
                    subtitle="Pan Paceño"
                    text="La marraqueta paceña es un pan crocante, de sabor inigualable y textura ligera y aireada, que se caracteriza por ser un ícono culinario de la ciudad de La Paz. Se elabora con harina de trigo, agua, sal, levadura y azúcar."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo3">
                <CardR
                    imageSrc="/PanTradicional/SARNITA.jpg"
                    title="SARNA"
                    subtitle="Pan Paceño"
                    text="El pan sarnita es un pan tradicional boliviano que se caracteriza por su textura suave y esponjosa, y por ser rico en queso cocido"
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo4">
                <CardR
                    imageSrc="/PanTradicional/chamillo.jpg"
                    title="CHAMILLO"
                    subtitle="Delicioso y casero"
                    text="Para su elaboración, se preparan dos masas diferentes, una de harina blanca y la otra de harina integral, ambas de trigo"
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
             </div>
            <div className="footer">
                <h3 className="pie">© 2024 - Todos Los Derechos Reservado . || . 
                Pagina Creada por Katherin Aide Ramirez Alanoca</h3>
            </div>
        </div>
    );
}