import React from 'react';

const Sidebar = ({ onSelectTab }) => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => onSelectTab('dashboard')}>
                            Dashboard
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => onSelectTab('sites')}>
                            Sites
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => onSelectTab('trials')}>
                            Trials
                        </button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Patients
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Queries
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Reports
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
