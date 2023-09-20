import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <p>
                Main Layout
                <Outlet></Outlet>
            </p>
        </div>
    );
};

export default Main;