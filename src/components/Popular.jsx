// import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Card from 'react-bootstrap/Card';
import CartBtn from './cartButton/CartBtn';
import { NavLink } from 'react-router-dom';

const Popular = ({ addProductToCart, openProductCard, currentProduct }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4')
            .then(function (response) {
                setProducts(response.data);
            })
    })
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    products.map((product) =>
                        <SwiperSlide key={product.id}>
                            <NavLink onClick={() => openProductCard(product.name, product.price, product.image_link, product.id, product.brand)} to={'product-card'}>
                                <Card >
                                    <Card.Img variant="top" src={product.image_link} />
                                    <Card.Body>
                                        <Card.Title>
                                            {product.name}
                                        </Card.Title>
                                        <Card.Text>
                                            <span>{product.price_sign}{product.price}</span>

                                        </Card.Text>
                                        <div className='product-colors'>
                                            {
                                                product.product_colors.map((color) =>
                                                    <span key={Math.random()} style={{ backgroundColor: `${color.hex_value}`, borderColor: `${color.hex_value}` }}></span>
                                                )
                                            }
                                        </div>
                                        <div className='product-rating'>
                                            {
                                                product.rating !== null ? <small className="text-muted">
                                                    {product.rating}
                                                </small>
                                                    : <span></span>
                                            }
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <CartBtn addProductToCart={() => addProductToCart(product.name, product.price, product.image_link, product.id, product.brand)}
                                        />
                                    </Card.Footer>
                                </Card>
                            </NavLink>
                        </SwiperSlide>
                    )}
            </Swiper>
        </div >
    )
}


export default Popular;