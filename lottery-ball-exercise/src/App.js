import logo from './logo.svg';
import LotteryCard from "./LotteryCard"
import "./App.css"

function App() {
  return (
    <div className="App">
      <LotteryCard />
      <LotteryCard title="Mini Daily" maxNum={10} numBalls={4} />
      <LotteryCard title="Power Ball" maxNum={30} numBalls={8}/>
    </div>
  );
}

export default App;
