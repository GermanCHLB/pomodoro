import React from 'react';
import ReactSlider from "react-slider";
import '../slider.css'
import {observer} from "mobx-react-lite";
import pomodoro from "../store/Pomodoro";
import SaveButton from "./SaveButton";

const Settings = observer(() => {
    return (
        <div style={{textAlign: "left"}}>
            <h1>Settings</h1>
            <label>Work: <span>{pomodoro.workMinutes}</span></label>
            <ReactSlider
                onChange={minutes => pomodoro.setWorkMinutes(minutes)}
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={pomodoro.workMinutes}
                min={5}
                max={60}
            />
            <label>Break: <span>{pomodoro.breakMinutes}</span></label>
            <ReactSlider
                onChange={minutes => pomodoro.setBreakMinutes(minutes)}
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={pomodoro.breakMinutes}
                min={5}
                max={60}
            />
            <div>
                <SaveButton
                    style={{marginTop: '10px', background: '#33cc33'}}
                    onClick={() => pomodoro.toggleSettings()}
                />
            </div>
        </div>
    );
});

export default Settings;
