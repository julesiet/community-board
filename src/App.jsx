import "./App.css";
import Card from "./components/Card";

const App = () => {

  return (
    <>
      <h1 className="fronthead"> THE TITLE </h1>
      <h2 className="subhead"> the subtitle </h2>
        <div className="page-container">
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
        </div>
    </>

  )
}

export default App;