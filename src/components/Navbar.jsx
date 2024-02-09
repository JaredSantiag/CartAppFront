import { NavLink } from "react-router-dom"
import { useAuth } from "../auth/hooks/useAuth";

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();

    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CartApp</a>
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
                        <li className="nav-item">
                            <NavLink className={'nav-link'} to="/products">Products</NavLink>
                        </li>
                        {!login.isAdmin ||
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to="/products/new">New product</NavLink>
                            </li>
                        }
                    </ul>

                    <div className="d-flex" role="search">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {login.user?.username}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={handlerLogout}>Logout</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    </>
}