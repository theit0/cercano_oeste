import { Productos } from "./Productos";
import lataPepsi from '../assets/lataPepsi.jpg'
import santaJulia from '../assets/santaJulia.png'
import pepsi from '../assets/pepsi.jpg'
import agua from '../assets/agua.jpg'
import aquarius from '../assets/aquarius.png'
import lataCerveza from '../assets/lataCerveza.png'
import fernetBranca from '../assets/fernetBranca.jpg'



export function Bebidas () {
    const bebidas = [
        {imagen:pepsi, titulo:'GASEOSA CHICA', descr:'PEPSI 500 ML. 7 UP 500 ML. MIRIUNDA 500 ML. PASO DE LOS TOROS 500 ML.', precio:'480'},
        {imagen:aquarius, titulo:'AGUA SABORIZADA', descr:'AQUARIUS', precio:'480'},
        {imagen:agua, titulo:'AGUA CON GAS', descr:'500ML', precio:'480'},
        {imagen:agua, titulo:'AGUA SIN GAS', descr:'500ML', precio:'480'},
        {imagen:lataPepsi, titulo:'LATA 354CC', descr:'PEPSI. 7 UP. MIRINDA. PASO DE LOS TOROS', precio:'360'},
        {imagen:santaJulia, titulo:'ESPUMANTES', descr:'EXTRA BRUT', precio:'2500'},
        {imagen:fernetBranca, titulo:'TRAGO FERNET BRANCA', descr:'COCA COLA. FERNET BRANCA', precio:'1500'},
        {imagen:lataCerveza, titulo:'CERVEZA RUBIA LATA', descr:'CERVEZA IMPERIAL LAGER RUBIA 473ML', precio:'900'},
    ]
    return (
        <div id='bebidas'>         
            <Productos producto={bebidas} tipoProductoNombre='BEBIDAS' />
        </div>
        
    )
}