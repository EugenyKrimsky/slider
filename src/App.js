import Slider from "./Slider";

function App(props) {
  return (
    <div className="App">
      <Slider arrWeather={props.arrWeather} />
    </div>
  );
}

export default App;
