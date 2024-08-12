import React from 'react';

const TrialList = () => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <h4>Trials</h4>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Trial</th>
                            <th>Phase</th>
                            <th>Site Count</th>
                            <th>Enrolled Patients</th>
                            <th>Target Patients</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chronic Heart Failure Study</td>
                            <td>Phase 2</td>
                            <td>6</td>
                            <td>282</td>
                            <td>500</td>
                            <td>04/12/2024</td>
                            <td>Ongoing</td>
                            <td><button className="btn btn-link">View Details</button></td>
                        </tr>
                        <tr>
                            <td>Diabetes Study</td>
                            <td>Phase 2</td>
                            <td>15</td>
                            <td>0</td>
                            <td>200</td>
                            <td>03/15/2021</td>
                            <td>06/30/2023</td>
                            <td><button className="btn btn-link">View Details</button></td>
                        </tr>
                        <tr>
                            <td>Cancer Study</td>
                            <td>Phase 1</td>
                            <td>5</td>
                            <td>0</td>
                            <td>50</td>
                            <td>05/20/2021</td>
                            <td>09/15/2022</td>
                            <td><button className="btn btn-link">View Details</button></td>
                        </tr>
                        <tr>
                            <td>Heart Disease Study</td>
                            <td>Phase 4</td>
                            <td>8</td>
                            <td>0</td>
                            <td>150</td>
                            <td>02/10/2021</td>
                            <td>11/20/2023</td>
                            <td><button className="btn btn-link">View Details</button></td>
                        </tr>
                        <tr>
                            <td>COVID-19 Study</td>
                            <td>Phase 2/3</td>
                            <td>12</td>
                            <td>0</td>
                            <td>250</td>
                            <td>04/05/2021</td>
                            <td>07/31/2022</td>
                            <td><button className="btn btn-link">View Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrialList;
