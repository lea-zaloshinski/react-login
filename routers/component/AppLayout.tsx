import { Outlet } from "react-router"
import NavBar from "./NavBar"

const AppLayout = () => {
    return (<>
        {/* <Outlet /> */}
        <NavBar />
        __________
        <Outlet />
    </>)
}

export default AppLayout