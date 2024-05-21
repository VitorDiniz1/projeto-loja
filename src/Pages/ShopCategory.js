

import { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item'

function ShopCategory(props){

    const {all_product} = useContext(ShopContext)

    return(
        <div className="shop-category">
            <img className='shopcategory-banner' src={props.banner}/>
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1 -12</span>out of 36 products
                </p>
                <div className='shopcategory-sort'>
                   Sort by <img src={dropdown_icon} />
                </div>
            </div>
            <div className='shopcategory-products'>
                {all_product.map((item,i)=>{
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name= {item.name} image={item.image} newPrice={item.new_price} oldPrice= {item.old_price}  />
                    }
                    else{
                        return null
                    }
                })}

            </div>
            <div className='shopcategory-loadmore'>
                Explore More

            </div>
        </div>
    )
}

export default ShopCategory