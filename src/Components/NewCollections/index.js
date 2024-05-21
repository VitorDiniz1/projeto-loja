
import './newcollection.css'


import new_collections from '../Assets/new_collections'
import Item from '../Item'

function NewCollections(){

    return(
        <div className="newcollections">
            <h1>New Collections</h1>
            <hr />
            <div className='collections'>
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name= {item.name} image={item.image} newPrice={item.new_price} oldPrice= {item.old_price}  />
                })}

            </div>
        </div>
    )
}

export default NewCollections