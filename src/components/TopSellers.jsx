import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const TopSellers = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty')
            .then(function (response) {
                setProducts(response.data);
            })
    })
    return (
        <div>
            <Carousel fade>
                {
                    products.map((product) =>
                        <Carousel.Item key={product.id}>
                            <img
                                className="d-block w-100"
                                src={product.image_link}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5 className='popular-pr__brand'>{product.brand}</h5>
                                <p className='popular-pr__name'>{product.name}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
};

export default TopSellers;