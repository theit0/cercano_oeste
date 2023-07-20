import { Productos } from "./Productos";
import f2 from '../assets/undefined.png'

export function Vegetariano () {
    const vegetariano = [
        {imagen:f2, titulo:'LASAGNA SIN MASA', descr:'VERDURAS A LA PLANCHA. ZUCCHINI. BERENJENA. PIMIENTO. HUEVO. TOMATE', precio:'2800'},
        {imagen:f2, titulo:'EMPANADAS', descr:'OLIVA. ROQUEFORT Y CEBOLLA. VERDURAS ASADAS. Consultar stock', precio:'300'},
        {imagen:f2, titulo:'BURGER VEGETARIANA', descr:'VERDURAS A LA PLANCHA. ZUCCHINI. BERENJENA. PIMIENTO. HUEVO. TOMATE', precio:'1300'},
        {imagen:f2, titulo:'LOMO VEGETARIANO', descr:'VERDURAS A LA PLANCHA. ZUCCHINI. BERENJENA. PIMIENTO. HUEVO. TOMATE', precio:'2800'}
    ]
        
    return (
        <div id='vegetariano'>         
            <Productos producto={vegetariano} tipoProductoNombre='VEGETARIANO'/>
        </div>
    )
}