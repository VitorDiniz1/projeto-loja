
import './breadcrums.css'
import arrowIcon from '../Assets/breadcrum_arrow.png'


function Breadcrums(props){
    const {product} = props

    return(
        <div className='breadcrum'>
            HOME <img src={arrowIcon} /> SHOP <img src={arrowIcon} /> {product.category} <img src={arrowIcon} /> {product.name}
        </div>
    )
}

export default Breadcrums