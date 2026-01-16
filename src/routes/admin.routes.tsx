import AdminLayout from "../layouts/AdminLayout";

const adminRoutes = {
    path: "admin",
    element: <AdminLayout />,
    children: [
        {path: 'dashboard', element: <h2>Dashboard</h2>},
        {path: 'user-management', element: <h2>User managemnt</h2>}
    ]
}

export default adminRoutes;