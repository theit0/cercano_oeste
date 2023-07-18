import '../styled-components/Carousel.css'
import Abierto from '../assets/abierto.jpeg'
import Ambiente from '../assets/ambiente.jpeg'
import AmbienteConGente from '../assets/ambienteConGente.jpeg'
import AmbienteDesdePuerta from '../assets/ambienteDesdePuerta.jpeg'
import Fuego from '../assets/fuego.jpeg'
import MesaReservada from '../assets/mesaReservada.jpeg'
import Entrada from  '../assets/entrada.jpeg'
import Fuego2 from '../assets/fuego2.jpeg'
import Cactus from '../assets/cactus.png'

export function Carousel () {

    const imagenes = [Abierto,Ambiente,AmbienteConGente,AmbienteDesdePuerta,Fuego,MesaReservada,Entrada,Fuego2]


    const imagenesLista = imagenes.map ( (imagen,index) => {
        return (
            <span style={{ '--i': index + 1}}>
                <img src={imagen} alt={`${imagen}`}/>
            </span>
        )
    })

    return(
        <section className='carousel-main'>
            <section className='carousel-section'>
                <div className='carousel-titulo'>
                    <div>
                        <span>Conocé</span>
                        <h1>CERCANO <br/> OESTE</h1>
                    </div>
                    <div className='carousel-reservar'>
                        <p>¡Hace tu reserva!</p>
                        <a href={'https://wa.me/542615463224'} className='cabecera-boton-reservar' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} class="icon icon-tabler icon-tabler-brand-whatsapp" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>
                            +54 261 546-3224
                        </a>
                    </div>
                    <img src={Cactus} alt='cactus' className='cactus'/>
                </div>
            </section>
            <aside className='carousel-slider'>
                <div className='slider'>
                    {imagenesLista}
                </div>
            </aside> 
        </section>
        
    )
}