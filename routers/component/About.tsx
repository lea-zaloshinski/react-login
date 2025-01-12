import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

const About = () => {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     navigate('/')
    // }, [])
    const location = useLocation()
    console.log(location);

    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')
    const age = queryParams.get('age')

    return (<>
        <h1>About</h1>
        {location.state?.fromNav ? 'from nav' : 'from url'}
        <h3>{name} - {age}</h3>
    </>)
}

export default About