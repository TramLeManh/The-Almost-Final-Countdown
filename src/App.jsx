import Player from './components/Player.jsx';
import TimerComponents from './components/TimerComponents.jsx'
import ResultModal from './components/ResultModal.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerComponents></TimerComponents>
      </div>
    </>
  );
}

export default App;
