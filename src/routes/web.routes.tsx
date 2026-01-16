import AppLayout from "../layouts/AppLayout";
import About from "../pages/About";
import Home from "../pages/Home";

const userRoutes = {
    element: <AppLayout />,
    children: [
        {index: true, element: <Home />},
        {path: 'movies', element: <Home />},
        {path: 'about', element: <About />}
    ]
}

export default userRoutes;
