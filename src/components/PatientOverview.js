import React from 'react';

const PatientOverview = () => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <h4>Patient Recruitment</h4>
            </div>
            <div className="card-body">
                <p>Total Patients: 282</p>
                <p>Screened: 350</p>
                <p>Enrolled: 282</p>
            </div>
        </div>
    );
};

export default PatientOverview;
