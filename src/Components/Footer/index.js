

import './footer.css'

import footerLogo from '../Assets/logo_big.png'
import IntagramIcon from '../Assets/instagram_icon.png'
import pintesterIcon from '../Assets/pintester_icon.png'
import wppIcon from '../Assets/whatsapp_icon.png'

function Footer(){

    return(
        <div className='footer'>

            <div className='footer-logo'>
                <img src={footerLogo} />
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Product</li>
                <li>Officies</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src= {IntagramIcon} />
                </div>

                <div className='footer-icons-container'>
                    <img src= {pintesterIcon} />
                </div>

                <div className='footer-icons-container'>
                    <img src= {wppIcon} />
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>

            </div>
            
        </div>
    )
}

export default Footer