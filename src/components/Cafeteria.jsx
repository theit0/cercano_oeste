import { Productos } from "./Productos";
import cafeCap from '../assets/cafeCap.jpg'
import te from '../assets/te.png'

export function Cafeteria () {
    const cafeteria = [
        {imagen:cafeCap, titulo:'CAFÉ', descr:'CAFÉ DE CAPSULA', precio:'450'},
        {imagen:te, titulo:'TÉ', descr:'HIERBAS O SABORIZADOS', precio:'450'},
    ]
    return (
        <div id='cafeteria'>         
            <Productos producto={cafeteria} tipoProductoNombre='CAFETERÍA' />
        </div>
        
    )
}