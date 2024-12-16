import {Route,Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import PanTradicional from './paginas/PanTradicional';
import PanVitaminicos from './paginas/PanVitaminicos';
import QuequesEspeciales from './paginas/QuequesEspeciales';
import QuequesCombinados from './paginas/QuequesCombinados';
import Enpanadas from './paginas/Enpanadas';
export default function Principal(props)
{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/dos" element={<PanTradicional></PanTradicional>}></Route>
                <Route path="/tres" element={<PanVitaminicos></PanVitaminicos>}></Route>
                <Route path="/cuatro" element={<QuequesEspeciales></QuequesEspeciales>}></Route>
                <Route path="/cinco" element={<QuequesCombinados></QuequesCombinados>}></Route>
                <Route path="/seis" element={<Enpanadas></Enpanadas>}></Route>
            </Routes>
        </div>

    );
}