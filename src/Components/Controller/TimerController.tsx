import React, { useState } from 'react';
import {
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import { setStorage } from '../../utils/utils';
  import './styling/timerController.css'


const TimerController = () => {
    const [time, setTime] = useState(15);

    const changeTimeValue = (val: number) => {
        setTime(val);
    }

    const setClock = () => {
        setStorage('user-action-time', {type: 'set-clock', value: time, timeStamp: new Date()});
    }

    const startClock = () => {
        setStorage('user-action-time', {type: 'start-clock', value: time, timeStamp: new Date()});
    }

    const stopClock = () => {
        setStorage('user-action-time', {type: 'stop-clock', value: time, timeStamp: new Date()});
    }

    const resetClock = () => {
        setStorage('user-action-time', {type: 'reset-clock', value: time, timeStamp: new Date()});
    }

    return(
        <div className='timer-controller'>
            <h5>Clock</h5>
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
}

export default TimerController;