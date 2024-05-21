
import './hero.css'

import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'


function Hero(){

    return(
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={handIcon}/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collections</div>
                    <img src={arrowIcon}/>
                </div>
            </div>
            <div className='hero-rigth'>
            <img src={heroImage}/>

            </div>
        </div>
    )
}

export default Hero