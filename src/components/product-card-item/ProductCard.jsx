import { useParams } from "react-router-dom";
const ProductCard = ({currentProduct}) => {
    const { id } = useParams()
    return (
        <div>
            <div className="main__block">
                <div className="main__block-img">
                    <img src={currentProduct.imgUrl} alt="" />
                </div>
                <div className="main__block-info">
                    <h1>{currentProduct.name}</h1>
                    <h2>{currentProduct.brand}</h2>
                    <span>${currentProduct.price}</span>
                    <span></span>
                </div>
            </div>
            <div className="desc__block">
                <p></p>
            </div>
        </div>
    )
};

export default ProductCard;