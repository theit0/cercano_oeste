import '../styled-components/PromoItem.css'
export function PromoItem ({nombre,descr,precio}) {
    return(
       <article className='promoItem-container'>
            <div className='promoItem-titulo'><span>{nombre}</span></div>
            <div className='promoItem-descr'><span>{descr}</span></div>
            <div className='promoItem-precio'><span>${precio}</span></div>
       </article> 
    )
}