import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import ListMitarbeiterComponent from "./components/ListMitarbeiterComponent";
import AddMitarbeiterComponent from "./components/AddMitarbeiterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/mitarbeiter" element={<ListMitarbeiterComponent />} />
            <Route
              path="/add-mitarbeiter"
              element={<AddMitarbeiterComponent />}
            />
            <Route
              path="/add-mitarbeiter/:id"
              element={<AddMitarbeiterComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
