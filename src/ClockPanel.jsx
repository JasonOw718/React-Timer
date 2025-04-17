import Clock from "./Clock";
function ClockPanel({ start, pause, reset }) {
  return (
    <>
      <Clock />
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default ClockPanel;