import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'

export function Empanadas () {
    const empanadas = [
        {imagen:f2, titulo:'CARNE CORTADA', descr:'C/U. LA DOCENA $2800', precio:'350'},
        {imagen:f2, titulo:'JAMÓN Y QUESO', descr:'C/U. LA DOCENA $2500', precio:'300'},
        {imagen:f2, titulo:'CAPRESE', descr:'C/U. LA DOCENA $2500', precio:'300'},
        {imagen:f2, titulo:'OLIVA', descr:'C/U. LA DOCENA $2500', precio:'300'},
        {imagen:f2, titulo:'ROQUEFORT', descr:'C/U. LA DOCENA $2500', precio:'300'},
        {imagen:f2, titulo:'CEBOLLA', descr:'C/U. LA DOCENA $2500', precio:'300'},
        {imagen:f2, titulo:'VERDURAS ASADAS', descr:'C/U. LA DOCENA $2500', precio:'300'},
    ]
        
    return (
        <Productos producto={empanadas} tipoProductoNombre='EMPANADAS'/>
    )
}