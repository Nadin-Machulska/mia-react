import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Card from 'react-bootstrap/Card';
import CartBtn from '../../cartButton/CartBtn';
import FilterModal from '../../filter/FilterModal';
import { NavLink } from 'react-router-dom';

const Mascara = ({ addProductToCart, openProductCard }) => {
    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFilter] = useState([])

    useEffect(() => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara')
            .then(function (response) {
                setProducts(response.data);
                setProductsFilter(response.data);

            })
    }, [])
    return (
        <div>
            <FilterModal products={products} setProducts={setProducts} productsFilter={productsFilter} setProductsFilter={setProductsFilter} />

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    products.map((product) =>
                        product.price !== '0.0' &&

                        <SwiperSlide key={product.id}>
                            <NavLink onClick={() => openProductCard(product.name, product.price, product.image_link, product.id, product.brand)} to={'/product-card'}>

                                <Card >
                                    <Card.Img variant="top" src={product.image_link} />
                                    <Card.Body>
                                        <Card.Title>
                                            <span>{product.name}</span>
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
                            </NavLink>
                        </SwiperSlide>
                    )}
            </Swiper>
        </div >
    )

};

export default Mascara;