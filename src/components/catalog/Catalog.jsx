import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const Catalog = () => {
    return (
        <div>
            <Nav fill variant='tabs' activeKey="">
                <Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle className='toggle-btn-custom' id="dropdown-basic">
                            Eyes
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >
                                <NavLink className='dropdown__list-item' to={'eyeshadow'}>
                                    Eyeshadow
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink className='dropdown__list-item' to={'eyeliner'}>
                                    Eyeliner
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink className='dropdown__list-item' to={'mascara'}>
                                    Mascara
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className='toggle-a-custom' to={'brows'}>
                        Eyebrows
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                <Dropdown>
                        <Dropdown.Toggle className='toggle-btn-custom' id="dropdown-basic">
                            Face
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >
                                <NavLink to={'blush'}>
                                    Blush
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to={'bronzer'}>
                                    Bronzer
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to={'foundation'}>
                                    Foundation
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
                <Nav.Item>
                <Dropdown>
                        <Dropdown.Toggle className='toggle-btn-custom'  id="dropdown-basic">
                            Lips
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >
                                <NavLink to={'lipliner'}>
                                    Lipliner
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to={'lipstick'}>
                                    Lipstick
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className='toggle-a-custom' to={'body'}>Body</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className='toggle-a-custom'  to={'fragrances'}>Fragrances</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    )
};

export default Catalog;