import Menu from "../Componentes/Menu";
import CardR from '../Componentes/CardR';
import './enpa.css'
import './diseño.css'
import PanTradicional from "./PanTradicional";
export default function Enpanadas (props){
    return(
        <div className="padre">
            <div className="cacecera"><img className="imgg" src="./baneer.jpg"></img></div>
            <div><Menu></Menu></div>
            <div className="cuerpo">
                <div className="cuerpo1">
                    <CardR
                        imageSrc="/Empanadas/queso.jpg"
                        title="EMPANADA DE QUESO"
                        subtitle="Enpanadas"
                        text="Esta empanada combina una cubierta crocante con un relleno cremoso de queso fresco. Perfecta para disfrutar como aperitivo o en el desayuno."
                        buttonText="Comprar ahora"
                        onButtonClick={() => alert('¡Gracias por tu compra!')}
                    />
                </div>
                <div className="cuerpo2">
                <CardR
                    imageSrc="/Empanadas/CARNE.jpg"
                    title="EMPANADA DE CARNE"
                    subtitle="Enpanadas"
                    text="Con un relleno jugoso de carne sazonada y especias, esta empanada es ideal para quienes disfrutan de sabores tradicionales y únicos."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo3">
                <CardR
                    imageSrc="/Empanadas/JAMON.jpg"
                    title="EMPANADA DE JAMON"
                    subtitle="Enpanadas"
                    text="Elaborada con jamón de calidad, esta empanada combina un sabor salado con una textura suave. Ideal para cualquier momento del día."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo4">
                <CardR
                    imageSrc="/Empanadas/MERMELADA.jpg"
                    title="EMPANDA DE MERMELADA"
                    subtitle="Enpanadas"
                    text="Rellena con mermelada casera, esta empanada ofrece un equilibrio perfecto entre dulzura y frescura en cada mordida."
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


