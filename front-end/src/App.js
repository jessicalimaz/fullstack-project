import HeaderFix from "./components/header/Header";
import { createGlobalStyle } from "styled-components";
import { Router } from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }`;

function App() {
  return (
    <div className="App">
      <HeaderFix/>
      <Router/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
