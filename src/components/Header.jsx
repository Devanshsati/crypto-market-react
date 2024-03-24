import React from 'react';

function Header({ handleSearch }) {

    const handleChange = (e) => {
        handleSearch(e.target.value);
    };

    return(
        <>
            <header class="p-3 mb-3 border-bottom">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/#" class="nav-link px-2 link-secondary">Overview</a></li>
                            <li><a href="/#" class="nav-link px-2 link-dark">Inventory</a></li>
                            <li><a href="/#" class="nav-link px-2 link-dark">Customers</a></li>
                            <li><a href="/#" class="nav-link px-2 link-dark">Products</a></li>
                        </ul>

                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" action="">
                            <input type="search" class="form-control" placeholder="Search Coin..." aria-label="Search" onChange={handleChange}/>
                        </form>

                        <div class="dropdown text-end">
                            <a href="/#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                            </a>
                            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="/#">New project...</a></li>
                                <li><a class="dropdown-item" href="/#">Settings</a></li>
                                <li><a class="dropdown-item" href="/#">Profile</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="/#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;