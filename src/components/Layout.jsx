import { Outlet} from "react-router-dom";
import Header from "./header/Header";
import Navigation from "./Navigation";
// import SearchProduct from "./SearchInput";

const Layout = ({shoppingList, setShoppingList, handleInputChange, inputValue, setInputValue, searchFeatures, setsearchFeatures, featureValue, setFeatureValue, handleFeaturedInput, 
}) => {
    return (
        <div>
            <Header shoppingList={shoppingList} setShoppingList={setShoppingList} handleInputChange={handleInputChange} inputValue={inputValue} setInputValue={setInputValue}  featureValue={featureValue} seFeatureValue={setFeatureValue} handleFeaturedInput={handleFeaturedInput} />
            <main>
                <Outlet/>
                {/* <SearchProduct/> */}
            </main>
            <footer></footer>
        </div>
    )
};

export default Layout;