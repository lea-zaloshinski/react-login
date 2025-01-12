

import { Outlet } from "react-router"
import NavBar from "./navbar"



const AppLayout = () => {

    return (<>

        {/* <Outlet /> */}

        <NavBar />

        ____________________________

        <Outlet />

    </>)

}

export default AppLayout



