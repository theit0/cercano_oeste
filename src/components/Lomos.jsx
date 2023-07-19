import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'

export function Lomos () {
    const lomos = [
        {imagen:f2, titulo:'LOMO DEL SHERIFF', descr:'FILET 400 GR. MILANESA DOBLE QUESO JAMÓN. HUEVO CEBOLLAS CRISPY. TOMATE', precio:'4800'},
        {imagen:f2, titulo:'LOMO CLÁSICO', descr:'FILET 300 GR. QUESO JAMÓN. TOMATE', precio:'3300'},
        {imagen:f2, titulo:'LOMO MILA', descr:'CARNE 400 GR DE MILANESA DOBLE QUESO JAMÓN. HUEVO CEBOLLAS CRISPY. TOMATE', precio:'3300'},
        {imagen:f2, titulo:'LOMO CERCANO OESTE', descr:'FILET 350 GR. QUESO. JAMÓN. HUEVO. CEBOLLAS CRISPY. TOMATE', precio:'3900'},
        {imagen:f2, titulo:'LOMO VEGETARIANO', descr:'VERDURAS A LA PLANCHA. ZUCCHINI. BERENJENA. PIMIENTO. HUEVO. TOMATE', precio:'2800'}
    ]
        
    return (
        <Productos producto={lomos} tipoProductoNombre='LOMOS'/>
    )
}