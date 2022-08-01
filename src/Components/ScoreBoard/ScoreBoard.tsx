import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import './ScoreBoard.css';

const ScoreBoard = () => {
    const [periodTime, setPeriodTime] = useState(0);
    const [shouldRun, setShouldRun] = useState(false);
    const [shouldSet, updateShouldSet] = useState(false);


    useEffect(() => {
        function checkUserData() {
          const item = JSON.parse(localStorage.getItem('user-action-time') || '');
          console.log(item)
          if (item) {
            const timeReceived = new Date()
            console.log(item.timeStamp, JSON.stringify(timeReceived))
            const timeDiff = new Date(item?.timeStamp).getTime() - timeReceived.getTime();
            console.log(timeDiff, item)

            if(item.type === 'set-clock' || item.type === 'reset-clock') {
                console.log('setting clock on local storage')
                setPeriodTime(item.value);
                updateShouldSet(true);
                if(item.type === 'reset-clock') {
                    setShouldRun(false);
                }
            }

            if(item.type === 'start-clock' || item.type === 'stop-clock') {
                console.log('starting or stopping clock on local storage')
                updateShouldSet(false);
                item.type === 'start-clock' ? setShouldRun(true) : setShouldRun(false)
            }
          }
        }
      
        window.addEventListener('storage', checkUserData)
      
        return () => {
          window.removeEventListener('storage', checkUserData)
        }
      }, [])

    return (
        <div className="score-board">
          <Clock 
              periodTime={periodTime} 
              shouldRun={shouldRun} 
              shouldSet={shouldSet} 
              updateShouldSet={updateShouldSet}
              setShouldRun={setShouldRun}
          />
          <div>Period: </div>
        </div>
      );
};

export default ScoreBoard;