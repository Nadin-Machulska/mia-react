import { NavLink } from "react-router-dom";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const SearchProduct = ({ inputValue, handleInputChange, featureValue, handleFeaturedInput }) => {
    const handdleSubmit = (e) => {
        e.preventDefault();
    }
    const [searchFeatures, setsearchFeatures] = useState([
        {
            name: "Brand",
            feature: 'brand',
            id: Math.random()
        },
        {
            name: "Product type",
            feature: 'product_type',
            id: Math.random()
    
        },
        {
            name: "Features",
            feature: 'product_tags',
            id: Math.random()
    
        }
    ])
    
    // const [foundProducts, setFoundProducts] = useState([])
    // const findProducts = (item) => {
    //     useEffect(() => {
    //         axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?')
    //             .then(function (response) {
    //                 setFoundProducts(response.data);
    //             })
    //         console.log(foundProducts);
    //     }, [])

    // }.

    // const featuresArray = searchFeatures;
    console.log(searchFeatures);

    return (
        <div>
            <form onSubmit={handdleSubmit} className='search-form'>
                <input className="search-products-input" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="search-toggle-btn">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            searchFeatures.map((item) =>
                            <Dropdown.Item 
                            key={item.id}  
                            value={item.feature}
                            onClick={() => handleFeaturedInput(item.feature)}
                            >{item.name}</Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <NavLink inputValue={inputValue} featureValue={featureValue} handleInputChange={handleInputChange} handleFeaturedInput={handleFeaturedInput} to={'search-output'} className="search-products-btn">
                    find
                </NavLink>
            </form>
        </div>
    )
};

export default SearchProduct;