import { useContext } from "react";
import TimeContext from "./TimeContext";
function Clock() {
  const time = useContext(TimeContext);
  return <h1>{time}</h1>;
}

export default Clock;