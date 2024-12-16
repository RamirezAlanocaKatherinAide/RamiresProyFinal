import Menu from "../Componentes/Menu";
import './diseño.css'
import CarrucelQueque from '../Componentes/CarrucelQueque';
import CardR from '../Componentes/CardR';

import './queque.css'
export default function QuequesEspeciales (props){
    return(
        <div className="padre">
            <div className="cacecera"><img className="imgg" src="./baneer.jpg"></img></div>
            <div><Menu></Menu></div>
            <div className="cuerpo">
            {/* <div className="carpanes"><CarrucelQueque></CarrucelQueque>
                <h2><br></br>QUEQUES ESPECIALES</h2>
                </div> */}
                <div className="cuerpo1">   
                <CardR
                    imageSrc="/QuequesEspeciales/croissnat.jpg"
                    title="CROISSANT"
                    subtitle="Queque Especial"
                    text="Este croissant tiene una capa exterior dorada y crujiente, con un interior esponjoso y lleno de sabor. Ideal para disfrutar en el desayuno o como un snack ligero."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo2">
                <CardR
                    imageSrc="/QuequesEspeciales/combinado.jpg"
                    title="PAN COMBINADO"
                    subtitle="Queque Especial"
                    text="Un delicioso pan que mezcla texturas y sabores, combinando harinas selectas con ingredientes frescos. Perfecto para un acompañamiento único y especial."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo3">
                <CardR
                    imageSrc="/QuequesEspeciales/CHOCLO.jpg"
                    title="QUEQUE DE CHOCLO"
                    subtitle="Queque Especial"
                    text="Con un sabor tradicional y auténtico, este queque está elaborado con choclo fresco. Su textura suave y dulce lo hace irresistible para cualquier ocasión."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo4">
                <CardR
                    imageSrc="/QuequesEspeciales/CHISPAS.jpg"
                    title="VAINILLA CON CHOCOLATE"
                    subtitle="Queque Especial"
                    text="La combinación perfecta de vainilla suave y trozos de chocolate que se derriten en cada mordida. Una opción clásica que siempre encanta."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                {/* <div className="cuerpo5">
                <CardR
                    imageSrc="/QuequesEspeciales/CHISPLA.jpg"
                    title="BANAN Y CHOCOLATE"
                    subtitle="Queque Especial"
                    text="Una mezcla deliciosa de banana madura y chocolate intenso. Este queque es ideal para quienes buscan un equilibrio perfecto de dulzura natural."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo6">
                <CardR
                    imageSrc="/QuequesEspeciales/chocolate.jpg"
                    title="QUEUQE CHOCOLATE"
                    subtitle="Queque Especial"
                    text="Un queque totalmente dedicado al chocolate, con un sabor profundo y una textura esponjosa que se derrite en la boca. Simplemente irresistible."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div> */}
             </div>
            <div className="footer">
                <h3 className="pie">© 2024 - Todos Los Derechos Reservado . || . 
                Pagina Creada por Katherin Aide Ramirez Alanoca</h3>
            </div>
        </div>
    );
}
