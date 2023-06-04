import MainWallOfShame from "./Components/MainWallOfShame";

const Users = [
  {
    id: 1,
    name: 'Brad Simmons',
    excuse: "Remember when you were young you shone like the sun. Shine on you",
    count: 1
  },
  {
    id: 2,
    name: "Brad Simmons",
    excuse: "Remember when you were young you shone like the sun. Shine on you",
    count: 1
  }
]


function App() {
  return (
    <div className="App">
      <MainWallOfShame users={Users} />
    </div>
  );
}

export default App;
