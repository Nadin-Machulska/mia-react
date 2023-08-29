import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import SearchInput from './search/SearchInput'
import Cart from "./cart/Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ shoppingList, setShoppingList, handleInputChange, setInputValue, inputValue, searchFeatures, setsearchFeatures, featureValue, setFeatureValue, handleFeaturedInput }) => {
    const [visible, setVisible] = useState(false)
    const showCartPopup = () => {
        setVisible(true)
    }
    const closeCartPopup = () => {
        setVisible(false)
    }
    return (
        <>
            <Nav fill className="header__nav" variant='tabs' activeKey="/popular">
                <div className="head__logo">
                    <Nav.Item>
                        <NavLink className='logo' to={'/'}>MIA</NavLink>
                    </Nav.Item>
                    <p>Cosmetics products for your nature beauty</p>
                </div>


                <div className="head__funct">
                    <div className="head__funct-head">

                        {visible &&
                            <Cart shoppingList={shoppingList} setShoppingList={setShoppingList} closeCartPopup={closeCartPopup} />
                        }
                        <button className="open-cart-button" onClick={showCartPopup}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <Nav.Item>
                            <NavLink className='login-link' to={'cabinet'}>Log in</NavLink>
                        </Nav.Item>
                    </div>
                    <div className="head__funct-floor">
                        <SearchInput handleInputChange={handleInputChange} inputValue={inputValue} setInputValue={setInputValue} featureValue={featureValue} setFeatureValue={setFeatureValue} handleFeaturedInput={handleFeaturedInput}/>
                    </div>
                </div>
            </Nav>
        </>
    )
};

export default Navigation;