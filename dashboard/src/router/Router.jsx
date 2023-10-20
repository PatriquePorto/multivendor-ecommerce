/**
 * The above function is a React component that uses the `useRoutes` hook from the `react-router-dom`
 * library to render the specified routes.
 * @returns The `routes` variable is being returned.
 */
import { useRoutes } from "react-router-dom"

const Router = ({ allRoutes }) => {
    const routes = useRoutes([...allRoutes])
    return routes
}

export default Router