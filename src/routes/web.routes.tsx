import AppLayout from "../layouts/AppLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const userRoutes = {
    element: <AppLayout />,
    children: [
        {index: true, element: <Home />},
        {path: 'movies', element: <Movie />},
        {path: 'about', element: <About />}
    ]
}

export default userRoutes;
