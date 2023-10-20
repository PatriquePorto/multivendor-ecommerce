import { lazy } from "react"
const Home = lazy(() => import("../../views/Home"))

export const sellerRoutes = [
    {
        path: '/admin/login',
        element: <Home />,
        ability: ['admin', 'seller'],
    },
]