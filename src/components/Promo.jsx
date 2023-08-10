import '../styled-components/Promo.css'
import { PromoItem } from './PromoItem'
export function Promo (){
    return(
        <section className="promo-section" id='promo'>
            <div className='promo-titulo-container'>
                <span className='promo-titulo'>PROMOCIONES</span>
            </div>

            <div className='promo-items-container'>
                <PromoItem 
                    nombre="Super Combo Burguer" 
                    descr="4 Burger simples. 1 Porción de papas fritas grandes."
                    precio={6500} />
                <PromoItem 
                    nombre="Promo Family Lomos" 
                    descr="3 Lomos clásicos. 1 Porción de papas fritas grandes."
                    precio={10500} />
                <PromoItem 
                    nombre="Promo Pizzas" 
                    descr="1 Pizza muzzarella. 1 Pizza especial"
                    precio={5400} />
                <PromoItem 
                    nombre="Combo simple" 
                    descr="4 Burger simples"
                    precio={5500} />
                <PromoItem 
                    nombre="Promo burger" 
                    descr="1 Medallón de 100gr. Cheddar. Tomate y lechuga. 1 Porción de papas fritas. 1 Lata de gaseosa 354CC"
                    precio={2200} />
                <PromoItem 
                    nombre="Promo Lomo+Papas" 
                    descr="1 Lomo cercano oeste. 1 Porción de papas fritas medianas"
                    precio={4500} />
                <PromoItem 
                    nombre="Promo Veggie" 
                    descr="2 Lomos vegetarianos. 1 Porción de papas fritas grandes"
                    precio={5500} />
            </div>
            
        </section>
    )
}