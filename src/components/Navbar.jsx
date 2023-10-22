import { NavLink } from "react-router-dom"

export const Navbar = () => {
    
    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CartApp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink className={'nav-link'} to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className={'nav-link'} to="/catalog">Catalog</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className={'nav-link'} to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}