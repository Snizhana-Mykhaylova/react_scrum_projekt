import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import ListMitarbeiterComponent from "./components/ListMitarbeiterComponent";
import AddMitarbeiterComponent from "./components/AddMitarbeiterComponent";
import ListTeilnehmerComponent from "./components/ListTeilnehmerComponent";
import ListDozentenComponent from "./components/ListDozentenComponent";
import AddTeilnehmerComponent from "./components/AddTeilnehmerComponent";
import AddDozentenComponent from "./components/AddDozentComponent";
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
            <Route path="/teilnehmer" element={<ListTeilnehmerComponent />} />
            <Route path="/dozenten" element={<ListDozentenComponent />} />
            <Route
              path="/add-mitarbeiter"
              element={<AddMitarbeiterComponent />}
            />
            <Route
              path="/add-mitarbeiter/:id"
              element={<AddMitarbeiterComponent />}
            />
            <Route
              path="/add-dozenten"
              element={<AddDozentenComponent/>}
            />
            <Route
              path="/add-dozenten/:id"
              element={<AddDozentenComponent />}
            />
          </Routes>
         
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
