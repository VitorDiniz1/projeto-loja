
import './productdisplay.css'
import starIcon from '../Assets/star_icon.png'
import starDullIcon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


function ProductDisplay(props){
    const {product} = props
    const {addToCart} = useContext(ShopContext)

    return(
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starDullIcon} />
                <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-prices-old'>${product.old_price} </div>
                    <div className='productdisplay-right-prices-new'>${product.new_price} </div>
                </div>
                <div className='productdisplay-right-description'>
                    a lihdn ijdiidx jidwixmw jxiosjio jxsix ijxwijxw 02is29is29 jdpwjpdxj ojdxw2d02 jd20dk29 jwdij2sdw20d20 bhdhwiuhdiuw jiojsj2s edihcie3
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD to Cart</button>
                    <p className='productdisplay-right-category'><span>Category : </span>Women, T-shirt, Crop Top</p>
                    <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>

                </div>

            </div>
        </div>
    )
}

export default ProductDisplay