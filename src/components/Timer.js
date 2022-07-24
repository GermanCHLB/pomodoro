import React from 'react';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import pomodoro from "../store/Pomodoro";
import StopButton from "./StopButton";
import {observer} from "mobx-react-lite";



const Timer = observer(() => {
    let color;
    let text;
    if (pomodoro.isStarted) {
        if (pomodoro.isPaused) {
            color = '#ffff00';
            text = 'Pause';
        } else {
            if (pomodoro.isWorking) {
                color = '#00ff33';
                text = 'Work';
            } else {
                color = '#00bfff';
                text = 'Break';
            }
        }
    } else {
        color = '#ff2400';
        text = 'Stopped';
    }

    return (
        <div>
            <CircularProgressbar
                value={pomodoro.timeLeft / (pomodoro.initialTimeLeft * 60) * 100}
                text={
                    `${Math.floor(pomodoro.timeLeft / 60)}:${String(pomodoro.timeLeft % 60).length === 1
                        ? '0' + String(pomodoro.timeLeft % 60)
                        : String(pomodoro.timeLeft % 60)
                    }`
                }
                styles={buildStyles({
                textColor: '#fff',
                pathColor: color,
                trailColor: 'rgba(255, 255, 255, 0.2)',
            })}/>
            <h1 className='text'>{text}</h1>
            <div style={{marginTop: '20px'}}>
                <PlayButton onClick={() => pomodoro.start()}/>
                <PauseButton onClick={() => pomodoro.togglePause()}/>
                <StopButton onClick={() => pomodoro.stop()}/>
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton onClick={() => {
                    pomodoro.stop();
                    pomodoro.toggleSettings();
                }}/>
            </div>
        </div>
    );
});

export default Timer;
