import { createBrowserRouter } from "react-router";
import userRoutes from "./web.routes";
import adminRoutes from "./admin.routes";

const router = createBrowserRouter([
    userRoutes, 
    adminRoutes
]);


export default router;