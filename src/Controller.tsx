import React, { useState } from "react";
import {
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
import './controller.css'

const Controller = () => {
    const [time, setTime] = useState(15);

    const changeTimeValue = (val: number) => {
        console.log(val)
        setTime(val);
    }

    const setClock = () => {
        localStorage.setItem('user-action-time', JSON.stringify({type: 'set-clock', value: time, timeStamp: new Date()}));
        console.log("set clock")
    }

    const startClock = () => {
        localStorage.setItem('user-action-time', JSON.stringify({type: 'start-clock', value: time, timeStamp: new Date()}));
        console.log("start clock")
    }

    const stopClock = () => {
        localStorage.setItem('user-action-time', JSON.stringify({type: 'stop-clock', value: time, timeStamp: new Date()}));
        console.log("stop clock")
    }

    const resetClock = () => {
        localStorage.setItem('user-action-time', JSON.stringify({type: 'reset-clock', value: time, timeStamp: new Date()}));
        console.log("reset clock")
    }

    return (
        <div className="controller">
            <h2>Controller</h2>
            <div className="timer-component">
                <NumberInput onChange={value => changeTimeValue(Number(value))} value={time} min={1} max={30}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Button colorScheme='blue' onClick={setClock}>Set Time</Button>
            </div>
            <div className="start-stop">
            <Button colorScheme='green' onClick={startClock}>Start</Button>
            <Button colorScheme='red' onClick={stopClock}>Stop</Button>
            </div>
            <div className="settings">
            <Button colorScheme='yellow' onClick={resetClock}>Reset</Button>
            </div>
        </div>
    )

};

export default Controller;