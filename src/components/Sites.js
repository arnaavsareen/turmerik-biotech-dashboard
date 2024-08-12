import React from 'react';
import { Tabs, Tab, Table, ProgressBar } from 'react-bootstrap';

const Sites = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Sites</h1>
                        <p>View and manage your sites</p>
                    </div>

                    <Tabs defaultActiveKey="all-sites" id="site-tabs" className="mb-3">
                        <Tab eventKey="all-sites" title="All sites">
                        </Tab>
                        <Tab eventKey="active-sites" title="Active sites">
                        </Tab>
                        <Tab eventKey="inactive-sites" title="Inactive sites">
                        </Tab>
                        <Tab eventKey="pending-sites" title="Pending sites">
                        </Tab>
                    </Tabs>

                    <div className="mb-4 map-container">
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Search for a location"
                        />
                        <div style={{ height: '300px', backgroundColor: '#E0E0E0' }}>
                        <img
                            src="/images/map_image.png"
                            alt="Map"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    </div>

                    <h4>Site list</h4>
                    <Table striped bordered hover responsive="sm" className="site-list-table">
                        <thead>
                            <tr>
                                <th>Site</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Demographic</th>
                                <th>Infrastructure</th>
                                <th>Previous Exp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { site: 'Site A', city: 'San Francisco', state: 'CA', country: 'USA', demographic: 10, infrastructure: 20, previousExp: 30 },
                                { site: 'Site B', city: 'New York', state: 'NY', country: 'USA', demographic: 15, infrastructure: 25, previousExp: 35 },
                                { site: 'Site C', city: 'Los Angeles', state: 'CA', country: 'USA', demographic: 20, infrastructure: 30, previousExp: 40 },
                                { site: 'Site D', city: 'Chicago', state: 'IL', country: 'USA', demographic: 25, infrastructure: 35, previousExp: 45 },
                                { site: 'Site E', city: 'Miami', state: 'FL', country: 'USA', demographic: 30, infrastructure: 40, previousExp: 50 },
                                { site: 'Site F', city: 'Houston', state: 'TX', country: 'USA', demographic: 35, infrastructure: 45, previousExp: 55 },
                                { site: 'Site G', city: 'Boston', state: 'MA', country: 'USA', demographic: 40, infrastructure: 50, previousExp: 60 },
                                { site: 'Site H', city: 'Seattle', state: 'WA', country: 'USA', demographic: 45, infrastructure: 55, previousExp: 65 },
                                { site: 'Site I', city: 'Philadelphia', state: 'PA', country: 'USA', demographic: 50, infrastructure: 60, previousExp: 70 },
                                { site: 'Site J', city: 'Atlanta', state: 'GA', country: 'USA', demographic: 55, infrastructure: 65, previousExp: 75 }
                            ].map((site, index) => (
                                <tr key={index}>
                                    <td>{site.site}</td>
                                    <td>{site.city}</td>
                                    <td>{site.state}</td>
                                    <td>{site.country}</td>
                                    <td>
                                        <ProgressBar now={site.demographic} max={100} />
                                    </td>
                                    <td>
                                        <ProgressBar now={site.infrastructure} max={100} />
                                    </td>
                                    <td>
                                        <ProgressBar now={site.previousExp} max={100} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </main>
            </div>
        </div>
    );
};

export default Sites;
