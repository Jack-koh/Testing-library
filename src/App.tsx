import React from "react";
import Queries from "./components/queries/Queries";
import AllQueries from "./components/allQueries/AllQueries";
import Counter from "./components/interactions/Interaction";
import AppProviders from "./providers/app-providers";
import MuiMode from "./components/mui/mui-mode";
import Mocking from "./components/mocking/Mocking";
import Http from "./components/http/Http";
import "./App.css";

function App() {
  return (
    // <AppProviders>
    //   <div className="App">
    //     <MuiMode />
    //   </div>
    // </AppProviders>
    <div className="App">
      {/* <Queries /> */}
      {/* <AllQueries skills={["HTML", "CSS", "JavaScript"]} /> */}
      {/* <Counter /> */}
      <Http />
    </div>
  );
}

export default App;
