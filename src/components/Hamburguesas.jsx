import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'

export function Hamburguesas () {
    const hamburguesas = [
        {imagen:f2, titulo:'BURGER DOBLE', descr:'MEDALLÓN DE 100 GR X2. CHEDDAR X 2. 1 TOMATE. LECHUGA', precio:'1700'},
        {imagen:f2, titulo:'BURGER SIMPLE', descr:'EDALLÓN DE 100 GR. CHEDDAR. 1 TOMATE. LECHUGA', precio:'1400'},
        {imagen:f2, titulo:'BURGER VEGETARIANA', descr:'VERDURAS A LA PLANCHA. ZUCCHINI. BERENJENA. PIMIENTO. HUEVO. TOMATE', precio:'1300'},
    ]
        
    return (
        <Productos producto={hamburguesas} tipoProductoNombre='HAMBURGUESAS'/>
    )
}