import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';

export const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/*" element={<Error404/>}/>
            </Routes>
        </>
    )
};
