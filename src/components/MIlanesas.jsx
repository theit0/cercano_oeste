import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'
import napoBang2XL from '../assets/napoBang2XL.jpeg'

export function Milanesas () {
    const milanesas = [
        {imagen:f2, titulo:'BANG 2XL', descr:'1 MILANESA PARA DOS. 1 PORCION DE PAPAS FRITAS. DOS HUEVOS', precio:'4200'},
        {imagen:napoBang2XL, titulo:'NAPO BANG 2XL', descr:'1 MILANESA PARA 2. JAMÓN. MUZZARELA. SALSA DE TOMATE. PAPAS FRITAS', precio:'4500'},
        {imagen:f2, titulo:'BANG 3XL', descr:'1 MILANESA PARA TRES. 1 PORCION DE PAPAS FRITAS. TRES HUEVOS.', precio:'5400'},
        {imagen:f2, titulo:'NAPO BANG 3XL', descr:'1 MILANESA PARA 3. JAMÓN. MUZZARELA. SALSA DE TOMATE. PAPAS FRITAS', precio:'5700'},
    ]
        
    return (
        <div id='milanesas'>         
            <Productos producto={milanesas} tipoProductoNombre='MILANESAS'/>
        </div>
    )
}