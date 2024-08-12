import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark p-0 shadow">
            <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"></a>
            <span className="navbar-text me-3">
                Powered by TURMERIK
            </span>
        </nav>
    );
};

export default Navbar;
