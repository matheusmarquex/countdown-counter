import React from 'react'
import './clock.css'
 const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    return (
        <>
        <div className="timer-container">
            <div className="timer">
                <div className="clock">
                    <div className="dhms">
                        <p>{timerDays}</p>
                    </div>
                        <small>Days</small>

                    <div className="dhms">
                        <p>{timerHours}</p>
                    </div>
                        <small>Hours</small>
                    <div className="dhms">
                        <p>{timerMinutes}</p>
                    </div>
                        <small>Minutes</small>
                    <div className="dhms">
                        <p>{timerSeconds}</p>
                    </div>
                        <small>Seconds</small>

                </div>
            </div>
        </div>
        </>
    )
}
Clock.defaultProps={
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0
}
export default Clock
