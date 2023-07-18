import '../styled-components/Cabecera.css'
import logo from '../assets/cercanoOesteLogo.png'

export function Cabecera () {
    return (
        <section className='cabecera'> 
            <div className='cabecera-contenedor-logo'>
                <a href=''><img className='cabecera-logo' src={logo}/></a>
            </div>
            <article className='cabecera-contenedor-reservar'>
                <span className='cabecera-texto-reservar'>¡Visitanos!</span>
                <a href={'https://goo.gl/maps/2eqc8rQexaPaHEgy6'} className='cabecera-boton-reservar' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-share" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path></svg>
                    UBICACIÓN
                </a>
            </article>
        </section>
    )
}