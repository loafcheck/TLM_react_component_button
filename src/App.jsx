import Button from "./Button";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Button variant="normal" size="md" turnoff>
        팔로우
      </Button>
      <Button size="md" variant="disabled" turnoff>
        팔로우
      </Button>
      <Button size="md" variant="active" turnoff>
        팔로우
      </Button>
    </div>
  );
}
export default App;
