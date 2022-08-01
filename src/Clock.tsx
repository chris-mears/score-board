import React, { useState, useEffect } from 'react';
import './clock.css';

let interval: ReturnType<typeof setInterval>;

type ClockProps = {
    periodTime: number;
    shouldRun: boolean; 
    shouldSet: boolean; 
    updateShouldSet: (a: boolean) => void;
    setShouldRun: (a: boolean) => void;
  };

const Clock = ({ periodTime, shouldRun, shouldSet, updateShouldSet, setShouldRun }: ClockProps) => {
    const [time, setTime] = useState(0);
    // 30 * 60 * 1000

    const updateClock = () => {
        setTime(time => time - 1000);
    }

    const startClock = () => {
        interval = setInterval(() => { updateClock() }, 1000);
    }

    const stopClock = () => {
        clearInterval(interval);
    }

    useEffect(() => {
        console.log('set useeffect', shouldSet, periodTime)
        if(shouldSet)
            setTime(periodTime * 60 * 1000);
    }, [shouldSet])

    useEffect(() => {
        console.log('run useeffect', shouldRun)
        if(shouldRun)
            startClock();
        else
            stopClock();
    }, [shouldRun])

    useEffect(() => {
        if(time < 1000) {
            stopClock();
            setTime(0);
            updateShouldSet(false);
            setShouldRun(false);
        }

    }, [time])

    const padTo2Digits = (num: number) =>  {
        return num.toString().padStart(2, '0');
    }

    const convertMsToTime = (milliseconds: number) => {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
    
        seconds = seconds % 60;
        minutes = minutes % 60;
    
    
        return `${padTo2Digits(minutes)}:${padTo2Digits(
        seconds,
        )}`;
    }

    return (
    <div className="Time">
        <p> {convertMsToTime(time)}</p>
    </div>
    );
}
export default Clock;