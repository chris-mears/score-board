import React, { useState } from "react";
import './styling/controller.css'
import TimerController from './TimerController';
import PeriodController from './PeriodController';
import PosessionClockController from './PossessionClockController';
import KeyClockController from './KeyClockController';
import TeamsController from './TeamsController';

const Controller = () => {


    return (
        <div className="controller">
            <h2>Controller</h2>
            <TimerController />
            <PeriodController />
            <PosessionClockController />
            <KeyClockController />
            <TeamsController />
        </div>
    )

};

export default Controller;