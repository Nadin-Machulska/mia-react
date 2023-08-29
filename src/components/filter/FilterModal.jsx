import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function FilterModal({ productsFilter, setProductsFilter, products, setProducts }) {
    const [categories, setCategories] = useState([
        {
            name: 'Powder',
            id: '001'
        },
        {
            name: 'Cream',
            id: '002'
        },
        {
            name: 'Pencil',
            id: '003'
        },
        {
            name: 'Liquid',
            id: '004'
        },
        {
            name: 'Gel',
            id: '005'
        },
        {
            name: 'Palette',
            id: '006'
        },
        {
            name: 'Concealer',
            id: '007'
        },
        {
            name: 'Contour',
            id: '008'
        },
        {
            name: 'Mineral',
            id: '009'
        },
        {
            name: 'Highlighter',
            id: '0010'
        },
        {
            name: 'Lipstick',
            id: '0011'
        },
        {
            name: 'Lipgloss',
            id: '0012'
        },
        {
            name: 'Lipsstain',
            id: '0013'
        }
    ]
    )

    const [tags, setTags] = useState([
        {
            name: 'Vegan',
            id: '0014'
        },
        {
            name: 'Natural',
            id: '0015'
        },
        {
            name: 'Organic',
            id: '0016'
        },
        {
            name: 'Hypoallergenic',
            id: '0017'
        },
        {
            name: 'Purpicks',
            id: '0018'
        },
        {
            name: "EWG Verified",
            id: '0019'
        },
        {
            name: "Canadian",
            id: '0020'
        },
        {
            name: "Gluten Free",
            id: '0021'
        }


    ]
    )

    const [brands, setBrands] = useState([
        {
            name: 'almay',
            id: `${Math.random()}`
        },
        {
            name: 'alva',
            id: `${Math.random()}`
        },
        {
            name: 'anna sui',
            id: `${Math.random()}`
        },
        {
            name: 'annabelle',
            id: `${Math.random()}`
        },
        {
            name: 'benefit',
            id: `${Math.random()}`
        },
        {
            name: 'boosh',
            id: `${Math.random()}`
        },
        {
            name: 'butter london',
            id: `${Math.random()}`
        },
        {
            name: 'cargo cosmetics',
            id: `${Math.random()}`
        },
        {
            name: 'china glaze',
            id: `${Math.random()}`
        },
        {
            name: 'clinique',
            id: `${Math.random()}`
        },
        {
            name: 'colourpop',
            id: `${Math.random()}`
        },
        {
            name: 'covergirl',
            id: `${Math.random()}`
        },
        {
            name: 'dior',
            id: `${Math.random()}`
        },
        {
            name: 'dr. hauschka',
            id: `${Math.random()}`
        },
        {
            name: 'e.l.f.',
            id: `${Math.random()}`
        },
        {
            name: 'essie',
            id: `${Math.random()}`
        },
        {
            name: 'fenty',
            id: `${Math.random()}`
        },
        {
            name: 'glossier',
            id: `${Math.random()}`
        },
        {
            name: "l'oreal",
            id: `${Math.random()}`
        },
        {
            name: 'lotus cosmetics usa',
            id: `${Math.random()}`
        },
        {
            name: "maia's mineral galaxy",
            id: `${Math.random()}`
        },
        {
            name: 'marcelle',
            id: `${Math.random()}`
        },
        {
            name: 'marienatie',
            id: `${Math.random()}`
        },
        {
            name: 'maybelline',
            id: `${Math.random()}`
        },
        {
            name: 'milani',
            id: `${Math.random()}`
        },
        {
            name: 'mineral fusion',
            id: `${Math.random()}`
        },
        {
            name: 'misa',
            id: `${Math.random()}`
        },
        {
            name: 'mistura',
            id: `${Math.random()}`
        },
        {
            name: 'nyx',
            id: `${Math.random()}`
        },
        {
            name: 'pacifica',
            id: `${Math.random()}`
        },
        {
            name: 'pure anada',
            id: `${Math.random()}`
        },
        {
            name: 'revlon',
            id: `${Math.random()}`
        },
        {
            name: 'salon perfect',
            id: `${Math.random()}`
        },
        {
            name: 'sante',
            id: `${Math.random()}`
        },
        {
            name: 'smashbox',
            id: `${Math.random()}`
        },
        {
            name: 'suncoat',
            id: `${Math.random()}`
        },
        {
            name: 'w3llpeople',
            id: `${Math.random()}`
        },
        {
            name: 'zorah',
            id: `${Math.random()}`
        },
        {
            name: 'zorah biocosmetiques',
            id: `${Math.random()}`
        },
    ])
    const filterProductsByCategories = (category, products) => {
        setProducts(products.filter(product => product.category === category.toLowerCase()))
        // console.log(products);
    }

    const filterProductsByTags = (tag, products) => {
        setProducts(products.filter(product => product.tag_list == tag))
        // console.log(products);
    }
    const filterProductByBrands = (brand, products) => {
        setProducts(products.filter(product => product.brand === brand))
        console.log(products);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className='filter-modal-btn' onClick={handleShow}>
                Filter
            </Button>

            <Modal show={show} onHide={handleClose} className='filter-modal' animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Brands</Accordion.Header>
                            <Accordion.Body>
                                <ul className='filter-list'>
                                    {
                                        brands.map((brand) =>
                                            <li key={brand.id} onClick={() => filterProductByBrands(brand.name, productsFilter)}>{brand.name}</li>
                                        )
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Categories</Accordion.Header>
                            <Accordion.Body>
                                <ul className='filter-list'>
                                    {
                                        categories.map((category) =>
                                            <li key={category.id} onClick={() => filterProductsByCategories(category.name, productsFilter)}>{category.name}</li>
                                        )
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Tags</Accordion.Header>
                            <Accordion.Body>
                                <ul className='filter-list'>
                                    {
                                        tags.map((tag) =>
                                            <li key={tag.id} onClick={() => filterProductsByTags(tag.name, productsFilter)}>{tag.name}</li>
                                        )
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='filter-btn-primary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='filter-btn-secondary' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FilterModal;