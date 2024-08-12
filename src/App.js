import React, { useState } from 'react'; 
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Sites from './components/Sites';
import Trials from './components/Trials';

const App = () => {
    const [selectedTab, setSelectedTab] = useState('dashboard');

    const renderContent = () => {
        switch (selectedTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'sites':
                return <Sites />;
            case 'trials':
                return <Trials />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar onSelectTab={setSelectedTab} />
                    <main>
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default App;
