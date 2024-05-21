import { useContext } from "react"
import { useParams } from "react-router-dom"

import { ShopContext } from "../Context/ShopContext"
import Breadcrums from "../Components/Breadcrums"
import ProductDisplay from "../Components/ProductDisplay"
import DiscriptionBox from "../Components/DiscriptionBox"
import RelatedProducts from "../Components/RelatedProducts.js"



function Product(){

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product.find((e)=>e.id === Number(productId))

    return(
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product}/>
            <DiscriptionBox />
            <RelatedProducts />

        </div>
    )
}

export default Product