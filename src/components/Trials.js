import React from 'react';
import { Tabs, Tab, Table, Button, ProgressBar } from 'react-bootstrap';

const Trials = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <div>
                            <h1 className="h3">Study of JK07 in Patients With Chronic Heart Failure (RENEU-HF)</h1>
                            <p>NCT06369298</p>
                            <small>Powered by TURMERIK</small>
                        </div>
                    </div>

                    <Tabs defaultActiveKey="overview" id="trials-tabs" className="mb-3">
                        <Tab eventKey="overview" title="Overview">
                            {/* Overview content */}
                        </Tab>
                        <Tab eventKey="reports" title="Reports">
                            {/* Reports content */}
                        </Tab>
                        <Tab eventKey="issues" title="Issues">
                            {/* Issues content */}
                        </Tab>
                        <Tab eventKey="settings" title="Settings">
                            {/* Settings content */}
                        </Tab>
                        <Tab eventKey="log" title="Log">
                            {/* Log content */}
                        </Tab>
                    </Tabs>

                    <div className="mb-4">
                        <h5>Details</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <p><strong>Drug name</strong>: JK07, Placebo</p>
                                <p><strong>Start date</strong>: 04/12/2024</p>
                                <p><strong>Study Type</strong>: Interventional</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Phase</strong>: Phase 2</p>
                                <p><strong>Last Update Posted</strong>: 30/05/2024</p>
                                <p><strong>Sponsor</strong>: Salubris Biotherapeutics Inc</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5>Sites</h5>
                        <Table striped bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Site name</th>
                                    <th>PI</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pasadena, California</td>
                                    <td>Dr. A</td>
                                    <td>US</td>
                                    <td><Button variant="outline-success" size="sm">Active</Button></td>
                                </tr>
                                <tr>
                                    <td>Hialeah, Florida</td>
                                    <td>Dr. B</td>
                                    <td>US</td>
                                    <td><Button variant="outline-secondary" size="sm">Inactive</Button></td>
                                </tr>
                                <tr>
                                    <td>Covington, Louisiana</td>
                                    <td>Dr. C</td>
                                    <td>US</td>
                                    <td><Button variant="outline-success" size="sm">Active</Button></td>
                                </tr>
                                <tr>
                                    <td>Bloomfield Hills, Michigan</td>
                                    <td>Dr. D</td>
                                    <td>US</td>
                                    <td><Button variant="outline-success" size="sm">Active</Button></td>
                                </tr>
                                <tr>
                                    <td>St. Louis, Missouri</td>
                                    <td>Dr. E</td>
                                    <td>US</td>
                                    <td><Button variant="outline-success" size="sm">Active</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="mb-4">
                        <h5>Patients</h5>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="border p-3">
                                    <h6>Total patients</h6>
                                    <p className="display-4">282</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="border p-3">
                                    <h6>Screened</h6>
                                    <p className="display-4">350</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="border p-3">
                                    <h6>Enrolled</h6>
                                    <p className="display-4">282</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5>Enrollment trend</h5>
                        <div>
                            <p>Chart placeholder</p>
                        </div>
                    </div>

                    {/* Documents Section */}
                    <div className="mb-4">
                        <h5>Documents</h5>
                        <Button variant="outline-primary" className="w-100 mb-2">Protocol</Button>
                        <Button variant="outline-primary" className="w-100 mb-2">Statistical analysis plan</Button>
                        <Button variant="outline-primary" className="w-100 mb-2">Clinical study report</Button>
                    </div>

                    {/* Data & Analysis Section */}
                    <div className="mb-4">
                        <h5>Data & Analysis</h5>
                        <Button variant="outline-primary" className="w-100 mb-2">Data management plan</Button>
                        <Button variant="outline-primary" className="w-100 mb-2">Data quality plan</Button>
                        <Button variant="outline-primary" className="w-100 mb-2">Safety data analysis</Button>
                    </div>

                    {/* Communication Section */}
                    <div className="mb-4">
                        <h5>Communication</h5>
                        <Button variant="outline-primary" className="w-100 mb-2">Discussion notes</Button>
                        <Button variant="outline-primary" className="w-100 mb-2">Chat with project team</Button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Trials;
