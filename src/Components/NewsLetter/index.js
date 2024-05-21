
import './newletter.css'

function NewsLetter(){

    return(
        <div className="newletter">
            <h1>Get Exclusive Offers on your Email</h1>
            <p>Subscribe to our newletter and stay update</p>
            <div>
                <input type='email' placeholder='Your email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter