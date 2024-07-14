import Players from "./Component/Players";
import TimerChallenges from "./Component/TimerChallenges";

function App() {
  return(
    <>
    <Players/>
    <div id="challenges">
     <TimerChallenges title={'Easy'} targetTime={1}/>
     <TimerChallenges title={'Not Easy'} targetTime={2}/>
     <TimerChallenges title={'Getting tough'} targetTime={2}/>
     <TimerChallenges title={'Props only'} targetTime={3}/>

    </div>


    </>
  )
}

export default App;
