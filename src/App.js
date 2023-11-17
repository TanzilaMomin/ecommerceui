import React from "react";
import { configStore } from "./Store/configStore";
import { Provider } from "react-redux";
import { Landing } from "./component/Landing";

function App() {
  const mystore = configStore();
  return (
    <div>
      <Provider store={mystore}>
        <Landing />
      </Provider>
    </div>
  );
}

export default App;
