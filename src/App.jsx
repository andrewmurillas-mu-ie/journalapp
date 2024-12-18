import NavBar from "./Components/HalfScreenPopup/App";
import HomePage from "./HomePage/App";
import GraphPage from "./GraphPage/App";
import { useState } from "react";

class Router {
    constructor(screens) {
        this.screens = screens;
    }

    route = (i) => {
        return (screens[i]);
    }
}

// This is the landing page
function App() {

    const screens = [<HomePage />, <GraphPage />];
    const [screenIndex, setScreenIndex] = useState(0);

    return (
        <>
            <Router>
                {/* Navigation bar */}
                <nav style={styles.navBar}>
                    <Link to="/" style={styles.link}>
                        Home
                    </Link>
                    <Link to="/routines" style={styles.link}>
                        Routines
                    </Link>
                    <Link to="/analytics" style={styles.link}>
                        Analytics
                    </Link>
                    <Link to="/settings" style={styles.link}>
                        Settings
                    </Link>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/routines" element={<Routines />} />
                    <Route path="/analytics" element={<Analytics />}>
                        <Route path="daily" element={<Daily />} />
                        <Route path="monthly" element={<Monthly />} />
                    </Route>
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
