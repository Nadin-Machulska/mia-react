import Popular from "../Popular";
import TopSellers from "../TopSellers";

const Home = ({addProductToCart, openProductCard, currentProduct}) => {
    return (
        <div>
            <Popular addProductToCart={addProductToCart} openProductCard={openProductCard} currentProduct={currentProduct}/>
            <TopSellers />
        </div>
    )
};

export default Home;