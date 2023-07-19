import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'
import especial from '../assets/especial.jpeg'
export function Pizzas () {
    const pizzas = [
        {imagen:f2, titulo:'MUZZARELLA', descr:'8 PORCIONES. SALSA DE TOMATE. MUZZARELLA. ACEITUNAS', precio:'4800'},
        {imagen:especial, titulo:'ESPECIAL', descr:'8 PORCIONES. SALSA DE TOMATE. MUZZARELLA. JAMÓN COCIDO. ACEITUNAS', precio:'3300'},
        {imagen:f2, titulo:'LA BILLY DE KID', descr:'8 PORCIONES. SALSA DE TOMATES. MORRONES. MUZZARELA. ACEITUNAS', precio:'3300'}
    ]
        
    return (
        <Productos producto={pizzas} tipoProductoNombre='PIZZAS'/>
    )
}