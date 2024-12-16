import Menu from "../Componentes/Menu";
import CarrucelCombi from '../Componentes/CarrucelCombi';
import CardR from '../Componentes/CardR';
import './combi.css'
import './diseño.css'
export default function QuequesCombinados (props){
    return(
        <div className="padre">
            <div className="cacecera"><img className="imgg" src="./baneer.jpg"></img></div>
            <div><Menu></Menu></div>
            <div className="cuerpo">queuqes combinados 
            {/* <div className="carpanes"><CarrucelCombi></CarrucelCombi>
                <h2><br></br>QUEQUES COMBINADOS</h2>
                </div> */}
                <div className="cuerpo1">   
                <CardR
                    imageSrc="/QuequeCombinados/marmolado.jpg"
                    title="MARMOLADO"
                    subtitle="Queque Combinado"
                    text="Este croissant tiene una capa exterior dorada y crujiente, con un interior esponjoso y lleno de sabor. Ideal para disfrutar en el desayuno o como un snack ligero."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo2">
                <CardR
                    imageSrc="/QuequeCombinados/NARACHIS.jpg"
                    title="NARANJA CHOCOLATE"
                    subtitle="Queque Combinado"
                    text="Un delicioso pan que mezcla texturas y sabores, combinando harinas selectas con ingredientes frescos. Perfecto para un acompañamiento único y especial."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo3">
                <CardR
                    imageSrc="/QuequeCombinados/NARANJA.jpg"
                    title="QUEQUE DE NARANJA"
                    subtitle="Queque Combinado"
                    text="Con un sabor cítrico suave y dulce, este queque está preparado con jugo de naranjas frescas. Es perfecto para un postre ligero o una merienda."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo4">
                <CardR
                    imageSrc="/QuequeCombinados/PIÑA.jpg"
                    title="QUEQUE DE PIÑA"
                    subtitle="Queque Combinado"
                    text="Preparado con piña natural, este queque es jugoso y refrescante. Cada mordida te transporta a un ambiente tropical lleno de sabor."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                {/* <div className="cuerpo5">
                <CardR
                    imageSrc="/QuequeCombinados/PLATANO.jpg"
                    title="QUEQUE DE PLATANO"
                    subtitle="Queque Combinado"
                    text="Un queque con plátano maduro que ofrece un toque dulce y natural. Su textura es suave y esponjosa, ideal para disfrutar a cualquier hora."
                    buttonText="Comprar ahora"
                    onButtonClick={() => alert('¡Gracias por tu compra!')}
                />
                </div>
                <div className="cuerpo6">
                <CardR
                    imageSrc="/QuequeCombinados/vainilla.jpg"
                    title="QUEUQE VAINILLA"
                    subtitle="Queque Combinado"
                    text="Un clásico que nunca falla. Este queque de vainilla destaca por su sabor delicado y una textura ligera que encanta a todos los paladares."
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
