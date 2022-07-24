import './App.css';
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import pomodoro from "./store/Pomodoro";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return(
        <div className="App">
            <main>
                {pomodoro.showSettings
                    ? <Settings/>
                    : <Timer/>
                }
            </main>
        </div>
    )
})

export default App;
