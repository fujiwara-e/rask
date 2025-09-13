import { useRoutes } from "react-router-dom"
import { path } from "@/constants/application"

export const Routes = () => {
    return useRoutes([
        {
            path: path.root(),
            element: <div>Home</div>,
        },
    ])
}