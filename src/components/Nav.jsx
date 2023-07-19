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
                        <a><li>Lomos</li></a>
                        <a><li>Pizzas</li></a>
                        <a><li>Bebidas</li></a>
                        <a><li>Milanesas</li></a>
                        <a><li>Ensaladas</li></a>
                        <a><li>Hamburguesas</li></a>
                        <a><li>Picadas</li></a>
                        <a><li>Empanadas</li></a>
                        <a><li>Ensaladas</li></a>
                        <a><li>Vegetariano</li></a>
                        <a><li>Cafetería</li></a>
                    </ul>
                </div>
            </div>
            <img src={Chubaca} className='chubaca'/>
        </section>
    )
}