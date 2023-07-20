import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'

export function Ensaladas () {
    const ensaladas = [
        {imagen:f2, titulo:'MIXTA', descr:'LECHUGA. TOMATE. CEBOLLA', precio:'900'},
    ]
    return (
        <div id='ensaladas'>         
            <Productos producto={ensaladas} tipoProductoNombre='ENSALADAS' />
        </div>
        
    )
}