import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PatientRecruitment = () => {
    const data = {
        labels: ['Jan 21', 'Feb 21', 'Mar 21', 'Apr 21', 'May 21', 'Jun 21', 'Jul 21'],
        datasets: [
            {
                label: 'Active Trials',
                data: [0, 1, 2, 1, 2, 1, 3],
                fill: false,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h4>Patient Recruitment</h4>
                <small>For all trials</small>
            </div>
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5>Active Trials</h5>
                                <p className="display-4">5</p>
                                <p className="text-success">+1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5>Enrolled Patients</h5>
                                <p className="display-4">0</p>
                                <p className="text-success">+0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default PatientRecruitment;
