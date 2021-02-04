import Steps from "./components/Steps";
import Step from "./components/Step";

import "./App.css";

function App() {
  function handleDoneClick() {
    alert("All done!");
  }
  return (
    <div className="app">
      <h1>Steps demo</h1>
      <p>
        Credit: Visual design inspired by{" "}
        <a
          href="https://ant.design/components/steps/"
          target="_blank"
          rel="noreferrer"
        >
          ant.design
        </a>
      </p>
      <Steps onDone={handleDoneClick}>
        <Step title="First">
          <div className="test-content">
            <div>First step content</div>
          </div>
        </Step>
        <Step title="Second">
          <div className="test-content">
            <div>Second step content</div>
          </div>
        </Step>
        <Step title="Third">
          <div className="test-content">
            <div>Third step content</div>
          </div>
        </Step>
      </Steps>
    </div>
  );
}

export default App;
