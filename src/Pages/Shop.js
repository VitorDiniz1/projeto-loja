import Hero from "../Components/Hero"
import NewCollections from "../Components/NewCollections"
import NewsLetter from "../Components/NewsLetter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"



function Shop(){

    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop