import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Cart = ({ shoppingList, closeCartPopup, setShoppingList }) => {
const [newCartItems, setNewCartItems] = useState();
// const [cartItemAmount, setCartItemAmount] = useState(1);

    const removeFromCart = (id) => {
        const newCartItems = shoppingList.filter(
            (item => item.id !== id
          ));
          setNewCartItems(newCartItems);
          console.log(newCartItems);
        setShoppingList(newCartItems);
      };
    
    const increase = (id) => {
        setShoppingList((cart) => {
            return cart.map((product) => {
                if (product.id === id){
                    return {
                        ...product,
                        amount: product.amount + 1,
                        priceTotal: product.amount * product.price
                    }
                } 
                return product
            })
        } )
    }

    const decrease = (id) => {
		setShoppingList((cart) => {
			return cart.map((product) => {
				if (product.id === id) {

					const newCount = product.amount - 1 > 1 ? product.amount - 1 : 1;

					return {
						...product,
						amount: newCount,
						priceTotal: newCount * product.price,
					};
				}
				return product
			})
		})
	}


    return (
        <div className='cart_modal' >
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Your Cart</Modal.Title>
                        <button className='close-btn' onClick={closeCartPopup}>X</button>
                    </Modal.Header>

                    <Modal.Body>
                        <ul className='cart_list'>
                            {shoppingList.map((item) =>
                                <li className='cart_item' key={item.id}>
                                    <div>
                                        <img src={item.imgUrl} className='cart_img' alt="" />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.brand}</p>
                                        <div>
                                            <button onClick={() => increase(item.id)}>+</button>
                                            <input type='number' min='1' max='20' value={item.amount}/>
                                            <button onClick={() => decrease(item.id)}>-</button>
                                            <button className='delete_btn'
                                            onClick={() => removeFromCart(item.id)}
                                            >X</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>${item.price}</p>
                                        <p>${item.priceTotal}</p>
                                    </div>
                                </li>
                            )
                            }
                        </ul>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">To order</Button>
                        <Button variant="primary" onClick={closeCartPopup}>Сontinue shopping</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    )
};

export default Cart;