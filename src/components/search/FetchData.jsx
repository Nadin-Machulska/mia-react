import { useEffect } from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CartBtn from '../cartButton/CartBtn';
import axios from 'axios';

const FetchData = ({ inputValue, featureValue, addProductToCart }) => {
    const [data, setData] = useState([]);
    console.log(inputValue);
    console.log(featureValue);

    
    useEffect(() => {
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?${featureValue}=${inputValue}`)
            .then(function (response) {
                setData(response.data);
            })
    }, [inputValue])
    console.log(data);

    return (
        <div>
            <Container className='products-container'>
                {
                    data.map((product) =>
                        <Card key={product.id}>
                            <Card.Img
                                variant='top'
                                src={product.image_link}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <span>{product.name}</span>
                                    <span>{product.brand}</span>
                                </Card.Title>
                                <Card.Text>
                                    <span>{product.price_sign}{product.price}</span>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>{
                                product.rating !== null ? <small className="text-muted">
                                    {product.rating}
                                </small>
                                    : <span></span>
                            }
                                <CartBtn addProductToCart={() => addProductToCart(product.name, product.price, product.image_link, product.id, product.brand)}
                                />
                            </Card.Footer>
                        </Card>
                    )}
            </Container>

        </div>
    )

}
export default FetchData;