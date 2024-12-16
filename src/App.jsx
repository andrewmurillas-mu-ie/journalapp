import NavBar from "./Components/NavBar/App"
import HomePage from "./HomePage/App";
import GraphPage from "./GraphPage/App"

// This is the landing page
function App() {

    const screens = [<HomePage/>, <GraphPage/>]

    return (
        <>
            <NavBar/>
        </>
    )
}