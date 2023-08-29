
const CartBtn = ({addProductToCart}) => {
    return (
        <button className="cart-btn" onClick={addProductToCart}>
            Add to cart
        </button>
    )
};

export default CartBtn;