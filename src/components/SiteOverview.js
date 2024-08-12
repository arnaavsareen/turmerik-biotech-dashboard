import React from 'react';

const SiteOverview = () => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <h4>Site Overview</h4>
            </div>
            <div className="card-body">
                <p>Total enrolled: 121/150</p>
                <p>Total screened: 150</p>
                <p>Enrollment Goal Progress: 121 of 150 patients enrolled</p>
            </div>
        </div>
    );
};

export default SiteOverview;
