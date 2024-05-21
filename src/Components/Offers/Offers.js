

import './offers.css'

import exclusiveImg from '../Assets/exclusive_image.png'

function Offers(){

    return(
        <div className="offers">
            <div className='offers-left'>
                <h1>Exlusive</h1>
                <h1>Offers For You</h1>
                <p>Only on Best Sellers Products</p>
                <button>Check Now</button>
            </div>
            <div className='offers-right'>
                <img src={exclusiveImg} />

            </div>
        </div>
    )
}

export default Offers