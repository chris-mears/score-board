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

function PeriodController() {
    const [period, setPeriod] = useState(1);

    const changePeriodValue = (val: number) => {
        setPeriod(val);
    }

    const setPeriodInStorage = () => {
        setStorage('user-action-period', {type: 'set-period', value: period, timeStamp: new Date()});
    }

    return (
        <div className='period-controller'>
            <h5>Period</h5>
            <div className="period-component">
                <NumberInput onChange={value => changePeriodValue(Number(value))} value={period} min={1} max={4}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Button colorScheme='blue' onClick={setPeriodInStorage}>Set Period</Button>
            </div>
        </div>
    )
}

export default PeriodController;