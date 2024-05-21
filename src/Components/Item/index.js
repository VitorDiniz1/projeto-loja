
import { Link } from 'react-router-dom'
import './item.css'

function Item(props){

    return(
        <div className='item'>
            <Link to ={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} src={props.image} /></Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.newPrice}
                </div>
                <div className='item-price-old'>
                    {props.oldPrice}
                </div>

            </div>
        </div>
    )
}

export default Item