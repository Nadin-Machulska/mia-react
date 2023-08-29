import Navigation from "../Navigation";
import Catalog from "../catalog/Catalog"

const Header = ({shoppingList, setShoppingList, handleInputChange, inputValue, setInputValue, searchFeatures, setsearchFeatures, featureValue, setFeatureValue, handleFeaturedInput}) => {
    return (
        <>
            <div className="head__up">
                <Navigation shoppingList={shoppingList} setShoppingList={setShoppingList} handleInputChange={handleInputChange} inputValue={inputValue} setInputValue={setInputValue}  featureValue={featureValue} seFeatureValue={setFeatureValue} handleFeaturedInput={handleFeaturedInput} 
          />
            </div>

            <div className="header__floor">
                <Catalog/>
            </div>

        </>
    )
};

export default Header;