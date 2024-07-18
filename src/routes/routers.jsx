import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRotes from "./privateRoutes";

const routes = createBrowserRouter([...publicRoutes, ...privateRotes]);
export default routes;