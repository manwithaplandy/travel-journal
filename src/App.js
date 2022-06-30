import "./App.css";
import Titlebar from "./components/Titlebar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cards = data.map((c) => <Card key={c.id} {...c} />);
  return (
    <div className="main">
      <Titlebar />
      <section id="cards">{cards}</section>
    </div>
  );
}

export default App;
