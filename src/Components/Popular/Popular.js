
import './popular.css'

import dataProduct from '../Assets/data'
import Item from '../Item'

function Popular(){

    return(
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-item'>
                {dataProduct.map((item,i)=>{
                    return<Item key={i} id={item.id} name= {item.name} image={item.image} newPrice={item.new_price} oldPrice= {item.old_price}  />
                })}

            </div>
        </div>
    )
}

export default Popular