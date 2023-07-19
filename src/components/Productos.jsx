import '../styled-components/Productos.css'

export function Productos ( {producto,tipoProductoNombre}) {  
    const prod = producto.map((p) => {
        return (
            <div className='producto-container'>
                <div className='producto-container-imagen'>
                    <img src={p.imagen} className='producto-imagen'/>
                </div>
                <div className='producto-info'>
                    <span className='producto-info-titulo'>{p.titulo}</span>
                    <span className='producto-info-descr'>{p.descr}</span>
                    <span className='producto-info-precio'>${p.precio}</span>
                </div>
            </div>
        ) 
    })  

    return (
        <div className='producto-main'> 
            <div className='producto-titulo'>
                <span>{tipoProductoNombre}</span>
            </div> 

            <div className='productos'>
                {prod}
            </div> 
        </div>
    )
}