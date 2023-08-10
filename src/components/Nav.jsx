import '../styled-components/Nav.css'
import Chubaca from '../assets/chubaca.png'
import Cowboy from '../assets/cowboy.jpeg'
export function Nav () {
    return (
        <section className='nav-section'>
            <div className='nav-titulo-container'>
                <span className='nav-title-1'> CARTA · CARTA · CARTA · CARTA · CARTA · CARTA · CARTA · CARTA · CARTA</span>
                <span className='nav-title-2'>CARTA · CARTA · CARTA · CARTA · CARTA · CARTA </span>
            </div>
            <div className='nav-menu'>
                <img src={Cowboy}  className='cowboy'/>
                <div>
                    <ul className='nav-menu-lista'>
                        <a href='#promo'><li>Promociones</li></a>
                        <a href='#lomos'><li>Lomos</li></a>
                        <a href='#pizzas'><li>Pizzas</li></a>
                        <a href='#bebidas'><li>Bebidas</li></a>
                        <a href='#milanesas'><li>Milanesas</li></a>
                        <a href='#ensaladas'><li>Ensaladas</li></a>
                        <a href='#hamburguesas'><li>Hamburguesas</li></a>
                        <a href='#empanadas'><li>Empanadas</li></a>
                        <a href='#vegetariano'><li>Vegetariano</li></a>
                        <a href='#cafeteria'><li>Cafetería</li></a>
                    </ul>
                </div>
            </div>
            <img src={Chubaca} className='chubaca'/>
        </section>
    )
}