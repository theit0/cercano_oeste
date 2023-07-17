import '../styled-components/Cabecera.css'
import logo from '../assets/cercanoOesteLogo.png'

export function Cabecera () {
    return (
        <section className='cabecera'> 
            <div className='cabecera-contenedor-logo'>
                <img className='cabecera-logo' src={logo}/>
            </div>
            <article className='cabecera-contenedor-reservar'>
                <span className='cabecera-texto-reservar'>¡Hace tu reserva!</span>
                <a href={'https://wa.me/542615463224'} className='cabecera-boton-reservar' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} class="icon icon-tabler icon-tabler-brand-whatsapp" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>
                    +54 261 546-3224
                </a>
            </article>
        </section>
    )
}