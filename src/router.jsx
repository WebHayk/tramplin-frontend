import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "@/layout/MainLayout.jsx";
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import RegisterPage from './pages/RegisterPage.jsx';
import EmployerDashboardPage from "@/pages/EmployerDashboardPage.jsx";
import CandidateDashboardPage from "@/pages/CandidateDashboardPage.jsx";
import OpportunityDetailPage from "@/pages/OpportunityDetailPage.jsx";
import AdminDashboard from "@/pages/AdminDashboardPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/auth",
                element: <AuthPage />,
            },
            {
                path: "/employer",
                element: <EmployerDashboardPage />
            },
            {
                path: "/candidate",
                element: <CandidateDashboardPage />
            },
            {
                path: "/opportunity/:id",
                element: <OpportunityDetailPage />
            },
            {
                path: "/admin",
                element: <AdminDashboard />,
            },
        ],
    },
]);

export default router;