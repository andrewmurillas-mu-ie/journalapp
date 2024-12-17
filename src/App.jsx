import NavBar from "./Components/NavBar/App";
import ListPage from "./ListPage/App";
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
            <NavBar>
                <ListPage/>
            </NavBar>
        </>
    )
}

export default App;
