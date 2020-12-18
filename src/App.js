import React from "react";
import "./styles.css";

export default function App() {
  const isOneAway = (firstMessage, secondMessage) => {
    let count = Math.abs(firstMessage.length - secondMessage.length);

    // Length diff can't exceed 1
    if (count > 1) {
      return false;
    }

    // Replace check
    let numberOfEdits = 0;
    if (count === 0) {
      for (let i = 0; i < firstMessage.length; i++) {
        if (firstMessage[i] !== secondMessage[i]) {
          numberOfEdits++;
        }
      }
    }

    return numberOfEdits < 2;
  };

  console.log(isOneAway("test", "hello"));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
