import { useRoutes } from "react-router-dom"
import { path } from "@/constants/application"
import { Welcome } from "@/components/pages/Welcome"

export const Routes = () => {
    return useRoutes([
        {
            path: path.root(),
            element: <div>Home</div>,
        },
        {
            path: path.welcome(),
            element: <Welcome />,
        }
    ])
}