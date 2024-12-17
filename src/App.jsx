import NavBar from "./Components/HalfScreenPopup/App"
import HomePage from "./HomePage/App";
import GraphPage from "./GraphPage/App"

// This is the landing page
function App() {

    return (
        <>
            <HalfScreenPopup isOpen={isHalfScreenPopupOpen} onClose={halfMenuPopupToggle}>
                
            </HalfScreenPopup>
        </>
    )
}

export default App;