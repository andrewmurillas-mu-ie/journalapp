import NavBar from "./Components/HalfScreenPopup/App";
import HomePage from "./HomePage/App";
import GraphPage from "./GraphPage/App";
import { useState } from "react";

class Router  {
    constructor (screens) {
        this.screens = screens;
    }

    route = (i) => {
        return (screens[i]);
    }
}

// This is the landing page
function App() {

    const screens = [<HomePage/>, <GraphPage/>];
    const [screenIndex, setScreenIndex] = useState(0);

    return (
        <>
            <NavBar screen={Router(screens).route(screenIndex)}>

            </NavBar>
        </>
    )
}

export default App;
