import { Children } from "react";
import LayoutIndex from "../layouts/admin/LayoutIndex";
import Dashboard from "../pages/admin/dashboard";
import Category from "../pages/admin/category";

const privateRotes = [
    {
        path: "/admin",
        element: <LayoutIndex />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "category",
                element: <Category />
            }
        ]

    }
];
export default privateRotes;