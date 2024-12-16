
import Menu from "../Componentes/Menu";
import CarucelPanes from '../Componentes/CarucelPanes';
import './diseño.css'
import CardR from '../Componentes/CardR';
import './vita.css'
export default function PanVitaminicos (props){

    return(
        <div className="padre">
            <div className="cacecera"><img className="imgg" src="./baneer.jpg"></img></div>
            <div><Menu></Menu></div>
            <div className="cuerpo">
                {/* card reutilizable aqui */}
                <div className="carpanes">
                    {/* <CarucelPanes></CarucelPanes> */}
                </div>
                <div className="cuerpo1">
                    <CardR
                        imageSrc="/PanVitaminico/zanahoria.jpg"
                        title="ZANAHORIA"
                        subtitle="Saludable"
                        text="Preparado con manteca y harina de trigo, su cubierta es crocante mientras que su interior es suave y delicioso. Perfecto para acompañar con café o té por su sabor único."
                        buttonText="Comprar ahora"
                        onButtonClick={() => alert('¡Gracias por tu compra!')}
                    />
                </div>
                <div className="cuerpo2">
                    <CardR
                        imageSrc="/PanVitaminico/quinoa.jpg"
                        title="QUINOA"
                        subtitle="Saludable"
                        text="Con una textura ligera y crocante, este pan tradicional se elabora con harina de trigo y quinoa, ofreciendo un sabor auténtico y lleno de nutrientes esenciales."
                        buttonText="Comprar ahora"
                        onButtonClick={() => alert('¡Gracias por tu compra!')}
                    />
                </div>
                <div className="cuerpo3">
                    <CardR
                        imageSrc="/PanVitaminico/manzana.jpg"
                        title="MANZANA"
                        subtitle="Saludable"
                        text="Elaborado con trozos de manzana fresca, este pan es dulce y esponjoso, ideal para quienes buscan un toque afrutado en su desayuno o merienda diaria."
                        buttonText="Comprar ahora"
                        onButtonClick={() => alert('¡Gracias por tu compra!')}
                    />
                </div>
                <div className="cuerpo4">
                    <CardR
                        imageSrc="/PanVitaminico/maiz.jpg"
                        title="MAIZ"
                        subtitle="Saludable"
                        text="Este pan combina harina de maíz y trigo para lograr un sabor auténtico y rústico, con una textura densa y ligeramente dulce que encantará a todos."
                        buttonText="Comprar ahora"
                        onButtonClick={() => alert('¡Gracias por tu compra!')}
                    />
                </div>
                {/* <div className="cuerpo5">
                    <CardR
                        imageSrc="/PanVitaminico/coco.jpg"
                        title="COCO"
                        subtitle="Saludable"
                        text="Con un sabor tropical inconfundible, este pan de coco es suave y esponjoso, perfecto para acompañar con mermeladas o simplemente disfrutarlo solo."
                        buttonText="Comprar ahora"
                        onButtonClick={() => alert('¡Gracias por tu compra!')}
                    />
                </div>
                <div className="cuerpo6">
                    <CardR
                        imageSrc="/PanVitaminico/cocoyogut.jpg"
                        title="YOGUT"
                        subtitle="Saludable"
                        text="Este pan de yogurt combina suavidad y frescura en cada bocado, siendo perfecto para un desayuno ligero o una merienda rápida y saludable."
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
