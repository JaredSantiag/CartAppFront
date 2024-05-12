import { NavLink } from "react-router-dom"
import { useAuth } from "../auth/hooks/useAuth";
import { PersonFill, Cart3 } from 'react-bootstrap-icons';

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();

    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    CartApp
                    <Cart3 className="me-2"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to="/catalog">Catalog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to="/cart">Cart</NavLink>
                        </li>
                        {!login.isAdmin ||
                            <>
                                <li className="nav-item">
                                    <NavLink className={'nav-link'} to="/products">Products</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className={'nav-link'} to="/new">New product</NavLink>
                                </li>
                            </>
                        }
                    </ul>

                    <div className="d-flex" role="search">
                        <div className="btn-group dropstart">
                            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <PersonFill className="me-1"/>
                                {login.user?.username}
                            </button>
                            <ul className="dropdown-menu me-auto" >
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li className="dropdown-item">
                                    <NavLink className={'nav-link'} to="/orders">My orders</NavLink>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" onClick={handlerLogout}>Logout</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    </>
}