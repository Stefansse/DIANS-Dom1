import React, { useState } from 'react';

const WineryFilterForm = ({ onFilter }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleFilter = () => {
        onFilter({ name, location });
    };

    return (
        <div>
            <label>
                Winery Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    );
};

export default WineryFilterForm;
