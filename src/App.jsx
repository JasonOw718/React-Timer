import { createContext, useContext, useEffect } from "react";
import "./App.css";
import useTimer from "./useTimer";
import ClockPanel from "./ClockPanel";
import TimeContext from "./TimeContext";

function App() {
  
  const [time,startTimer,pauseTimer,resetTimer]  = useTimer();

  return (
    <TimeContext.Provider value={time}>
      <ClockPanel start={startTimer} pause={pauseTimer} reset={resetTimer} />
    </TimeContext.Provider>
  );
}





export default App;
